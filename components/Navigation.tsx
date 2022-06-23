import useSWR from "swr";

const fetcher = (url:string) => {
    return fetch(url).then(res => res.json())
}

const Navigation = () => {
    const { data, error } = useSWR('/api/navigation', fetcher);
    return data && (
        <nav>
            <div className="nav_wrap">
                <div className="logo"/>
                <div className="info">
                    <div>
                        <div className="info_item profile_item">
                            <div className="profile"/>
                            <div className="profile_name">
                                <span>{data.name}</span>
                            </div>
                        </div>
                        <div className="info_item">
                            <span>포인트:</span>
                            <span>{data.point}</span>
                        </div>
                        <div className="info_item">
                            <span>쿠폰:</span>
                            <span>{data.coupon}장</span>
                        </div>

                    </div>
                    <div className="welcome">
                        <span>오늘 {data.reservationToday[0]} 방문 예정입니다.</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
