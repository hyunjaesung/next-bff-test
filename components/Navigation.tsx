import useSWR from "swr";
import request from "graphql-request";
import {graphql} from "graphql";

const fetcher = query => request('http://localhost:4000/graphql', query)

const NAVI_QUERY = `
query ExampleQuery {
  member {
    name
  }
  coupon {
    total
  }
  book {
    hotel {
      today
    }
  }
  point {
    total
  }
}`

const Navigation = () => {
    const {data, error} = useSWR(NAVI_QUERY, fetcher);
    return data && (
        <nav>
            <div className="nav_wrap">
                <div className="logo"/>
                <div className="info">
                    <div>
                        <div className="info_item profile_item">
                            <div className="profile"/>
                            <div className="profile_name">
                                <span>{data.member.name}</span>
                            </div>
                        </div>
                        <div className="info_item">
                            <span>포인트:</span>
                            <span>{data.point.total}</span>
                        </div>
                        <div className="info_item">
                            <span>쿠폰:</span>
                            <span>{data.coupon.total}장</span>
                        </div>

                    </div>
                    <div className="welcome">
                        <span>오늘 {data.book.hotel.today[0]} 방문 예정입니다.</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
