import Link from 'next/link';

export default function Card(props) {
    return (
        <figure className="recipe-card">
            <Link href={props.link}>
                <a>
                    <img className="recipe-picture" src={props.picture} />
                </a>
            </Link>

            <div className="recipe-category">{props.category}</div>
            <figcaption>{props.name}</figcaption>
        </figure>

    )
}