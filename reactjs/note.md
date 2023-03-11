React JS (Library)

- Thư viện Javascript xây dựng UI
- Xây dựng theo cơ chế Client Side (Sử dụng Javascript để build giao diện)

Khi học 1 framework javascript => Nên học theo 2 cơ chế

- Client Side: React Js
- Server Side: Next Js

Component: Thành phần

Modules: Chức năng

=> 1 modules sẽ có nhiều component

Trong React JS => Nếu function hoặc class được viết hoa chữ cái đầu => Gọi là component

Cách gọi Component: <Tenfunction /> hoặc <Tenfunction></Tenfunction>

Các Extension cần thiết

- Prettier => Format
- ES7+ React/Redux/React-Native snippets
- JS JSX Snippets

Event trong React JSX

Cần gọi 1 Event Handler có tham số

- Tạo ra 1 hàm không tham số để gọi 1 hàm có tham số
- Arrow Function trong Event JSX

Lưu ý khi làm việc với JSX

- JSX chỉ có duy nhất 1 thẻ bọc
- Nếu muốn có các thẻ ngang hàng => Bọc ra ngoài 1 thẻ html nào đó (Thường là thẻ div)
- Nếu không muốn xuất hiện thẻ bọc ở bên ngoài => Cần dùng React.Fragments

Các phím tắt khi tạo Component

- Tạo Functional Component => Component tạo bởi Function => rfc
- Tạo Class Component => Component tạo bởi class => rce

Toán tử sẽ sử dụng trong jsx

- toán tử 3 ngôi
- toán tử ??
- toán tử &&

Để hiển thị 1 danh sách lên jsx

- Chuyển thành dạng mảng
- Mỗi phần tử mảng sẽ là jsx

Props

- Tồn tại trong component và jsx
- Props giống như 1 thuộc tính của thẻ html
- Nhận props trong components => Nhận qua tham số của hàm (object)
- Props dùng để truyền dữ liệu từ component cha xuống component con
- Component không được phép cập nhật lại giá trị của Props

Render Props

- Đồng bộ dữ liệu giữa các component ngang hàng với nhau
- Two-way data binding

Children Props

- Props đặc biệt có tên `children`
- Thể hiện nội dung của 1 components: <Component>Nội dung</Component>

Functional Component và Class Component

- Học cả 2
- Lý do: Vừa giúp ích cho công việc, vừa hiểu rõ hơn về các thành phần của React: state, Lifecycle,...

State (Data)

- Quản lý dữ liệu trong 1 component
- Trong Class Component => Có sẵn thuộc tính `this.state`
- Khi State thay đổi => Component tự động re-render
- Để cập nhật State => Sử dụng phương thức `this.setState()`
- Tuyệt đối không được thay đổi trực tiếp thuộc tính `this.state` (Gây ra lỗi)
- Hàm `this.setState()` là 1 hàm bất đồng bộ, tuy nhiên giá trị State sẽ không thay đổi luôn ngay sau khi hàm setState được gọi

Xử lý Form

- Tạo state lưu trữ dữ liệu các input
- Lấy giá trị các ô input và lưu state (Sự kiện onChange)
- Xử lý submit form

Thực hành: Xây dựng TodoList App

- Mục tiêu

* Thành thạo về việc phân tích và cập nhật State
* Phân chia các component
* Sử dụng Render Props để share state

* Có 3 component:

- Todos: Component chính
- ShowTodos: Component hiển thị danh sách các công việc
- AddTodo: Component hiển thị form thêm công việc

* Phân tích data:

- Khi dữ liệu được add vào component `AddTodo` => Dữ liệu sẽ được cập nhật vào State chung
- State chung sẽ cần render ra component `ShowTodos`

Buổi sau:

- Lifcycle Component (vòng đời component)
- Call Api trong react

Tổng kết:

- Nắm kỹ vòng đời component
- Call api: Quy trình call api, vị trí gọi

Buổi sau:

- Refs (Sử dụng DOM trong React JS)
- forwardRef
- Higher Order Components
- React.memo

## Refs

- Sử dụng để thao tác DOM thật
- Khởi tạo refs: React.createRef()
- Tham chiếu ref vào element: Sử dụng thông qua props ref
- Sử dụng: tendoituongRef.current => Trả về 1 Node Dom

## forwardRef

- Khi làm việc với Ref => Chỉ tham chiếu trực tiếp tới Element thông qua prop ref
- Muốn tham chiếu tới element thông qua Component => Bọc component vào trong 1 component forwardRef (Higher Order Components)

## Higher Order Components

- Higher Order Components là 1 component được bọc 1 component khác
- HOC nhận vào 1 component và return ra chính component đó
- Sử dụng HOC để kế thừa logic và giải quyết các bài toán phức tạp trong Class Component

## Làm việc với Higher Order Component: React.memo

- Ngăn không cho component con re-render khi không có sự thay đổi về props
- Nếu props thay đổi => memo sẽ không chặn re-render

Buổi sau:

- Context API
- Thực hành build StateProvider => Quản lý Global State
