import { nanoid } from "nanoid";
import type { IPost } from "src/interfaces";

export class PostManager{
    private static instance:PostManager | undefined
    public posts: IPost[] = [
        {
            id: nanoid(),
            title: "Introduction to TypeScript",
            createdAt: "2025-01-01",
            description: "Learn TypeScript basics",
            content: `# Introduction to TypeScript  
  TypeScript is a **typed superset** of JavaScript that compiles to plain JavaScript.  
  - Easy to learn  
  - Great for large-scale applications

![alt text](/background.webp)`,
            view: 1540,
            url: "/background.webp"
        },
        {
            id: nanoid(),
            title: "Introduction to TypeScript",
            createdAt: "2025-01-01",
            description: "Learn TypeScript basics",
            content: `# Introduction to TypeScript  
    TypeScript is a **typed superset** of JavaScript that compiles to plain JavaScript.  
    - Easy to learn  
    - Great for large-scale applications
  
  ![alt text](/background.webp)`,
            view: 5150,
            url: "/background.webp"
        },
        {
            id: nanoid(),
            title: "Introduction to TypeScript",
            createdAt: "2025-01-01",
            description: "Learn TypeScript basics",
            content: `# Introduction to TypeScript  
    TypeScript is a **typed superset** of JavaScript that compiles to plain JavaScript.  
    - Easy to learn  
    - Great for large-scale applications
  
  ![alt text](/background.webp)`,
            view: 1150,
            url: "/background.webp"
        },
        {
            id: nanoid(),
            title: "Introduction to TypeScript",
            createdAt: "2025-01-01",
            description: "Learn TypeScript basics",
            content: `# Introduction to TypeScript  
    TypeScript is a **typed superset** of JavaScript that compiles to plain JavaScript.  
    - Easy to learn  
    - Great for large-scale applications
  
  ![alt text](/background.webp)`,
            view: 350,
            url: "/background.webp"
        },
        {
            id: nanoid(),
            title: "Introduction to TypeScript",
            createdAt: "2025-01-01 05:12:00 PM",
            description: "Learn TypeScript basics",
            content: `# Introduction to TypeScript  
    TypeScript is a **typed superset** of JavaScript that compiles to plain JavaScript.  
    - Easy to learn  
    - Great for large-scale applications
  
  ![alt text](/background.webp)`,
            view: 250,
            url: "/background.webp"
        }
    ];

    private constructor(){

    }

    public static getInstance(){
        if (!PostManager.instance){
            PostManager.instance = new PostManager()
        }
        return PostManager.instance
    }

}