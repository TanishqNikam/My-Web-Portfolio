import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getAllContent(type) {
    const dirPath = path.join(contentDirectory, type);

    if (!fs.existsSync(dirPath)) {
        return [];
    }

    const fileNames = fs.readdirSync(dirPath).filter(file => file.endsWith('.md'));

    const allContent = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const { data } = matter(fileContents);

        return {
            slug,
            ...data,
            date: data.date || '',
        };
    });

    return allContent.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getContentBySlug(type, slug) {
    const fullPath = path.join(contentDirectory, type, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const htmlContent = marked.parse(content);

    return {
        slug,
        ...data,
        htmlContent,
    };
}
