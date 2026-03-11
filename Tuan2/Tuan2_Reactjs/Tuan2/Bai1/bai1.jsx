import './bai1.css'

function student(props) {
    return (
        <div className="frame">
            <div className="header">
                <h1>Giới thiệu sinh viên</h1>
            </div>

            <div className="studentInfo">
                <h2>Tên sinh viên: {props.std.name}</h2>
                <h2>MSSV: {props.std.mssv}</h2>
                <h2>Lớp: {props.std.class}</h2>
            </div>

            <div className="footer">
                <h3>IUH</h3>
            </div>
        </div>
    )
}

export default student