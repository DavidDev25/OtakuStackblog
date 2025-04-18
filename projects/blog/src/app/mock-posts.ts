export interface BlogPost {
    id: number;
    title: string; 
    content: string;
    author: string;
}


export const MOCK_POSTS: BlogPost[] = [
    { author: 'OtakuStaffAdmin', id: 1, title: 'Mein erster Blogpost', content: 'Das ist der Inhalt des ersten Posts meines Blogs mit Beispieldaten.'},
    { author: 'OtakuStaffAdmin', id: 2, title: 'Mein zweiter Blogpost', content: 'Das ist der Inhalt des zweiten Posts meines Blogs mit Beispieldaten.'},
    { author: 'OtakuStaffAdmin', id: 3, title: 'Mein dritter Blogpost', content: 'Das ist der Inhalt des dritten Posts meines Blogs mit Beispieldaten.'},
];