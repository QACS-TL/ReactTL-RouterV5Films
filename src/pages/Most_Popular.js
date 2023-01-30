import {Link} from "react-router-dom"

export default function Most_Popular() {
    return (
        <div>
            <h2>
                UK's Most Popular Film
            </h2>
            <h3>Thunderbirds Are Go!</h3>
                <Link to={`https://www.youtube.com/watch?v=4q6z1FMS_mM`}>
                    <p>Thunderbirds</p>
                </Link>
        </div>
    )
}

