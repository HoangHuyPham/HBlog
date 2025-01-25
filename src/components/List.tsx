import { useEffect, type ReactNode } from "react"

interface ListProps {
    children?: ReactNode,
    animate?: any
}

const List: React.FC<ListProps> = ({ children, animate }) => {
    useEffect(() => {
        if (!animate) return
        const obsever = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("animate-appear");
                    }
                });
            },
            { threshold: 0 }
        );

        const cards = document.querySelectorAll('.card')
        cards.forEach(c => obsever.observe(c))
    }, [])

    return <>
        <section className="grid_wrapper col-span-12 gap-2">
            {
                children
            }
        </section>
    </>
}

export default List