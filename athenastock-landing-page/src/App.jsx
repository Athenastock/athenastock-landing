import React from "react";

export default function AthenastockLandingPage() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center text-center px-6">
        <img src="/1%20Logo%20Athenastock.png" alt="Athenastock Logo" className="w-40 mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Định Hướng Lại Tài Chính</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-pink-500 mb-4">Bứt Phá Kết Quả Đầu Tư</h2>
        <p className="text-sm md:text-lg text-gray-300 italic mb-6">
          Attitude Transform - Highest Efforts - Noble Achievement
        </p>
        <div className="flex gap-4">
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-2xl shadow-lg transition-all">Nhận Tư Vấn Miễn Phí</button>
          <button className="border border-pink-600 text-pink-400 hover:text-white hover:bg-pink-600 py-3 px-6 rounded-2xl transition-all">Tôi Muốn Làm Lại Hiệu Quả</button>
        </div>
      </section>

      {/* Section - Why Athenastock */}
      <section className="py-16 px-6 md:px-20 text-center bg-gray-950">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-500">Vì sao nên chọn ATHENASTOCK?</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          ATHENASTOCK là đơn vị tư vấn chứng khoán độc lập, kết hợp triết lý đầu tư của Warren Buffett và trí tuệ tỉnh thức của phương Đông để giúp bạn đầu tư hiệu quả và sống có ý nghĩa.
        </p>
      </section>

      {/* Section - Audience Segments */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-pink-500">Bạn thuộc nhóm nhà đầu tư nào?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">🔄 Nhà đầu tư từng thua lỗ</h3>
            <p className="text-gray-300 text-sm">Từng “đu đỉnh”, cháy tài khoản, mất niềm tin? ATHENASTOCK sẽ giúp bạn làm lại bài bản và bền vững.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">🚀 Nhà đầu tư mới</h3>
            <p className="text-gray-300 text-sm">Không biết bắt đầu từ đâu? Bạn sẽ được hướng dẫn cụ thể từ A đến Z để tự tin bước chân vào thị trường.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">🧠 Nhà đầu tư chuyên nghiệp</h3>
            <p className="text-gray-300 text-sm">Muốn vượt VN-Index? Chúng tôi giúp bạn tối ưu hiệu suất và chiến lược đầu tư để tạo khác biệt thật sự.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng đầu tư hiệu quả hơn?</h2>
        <p className="text-lg md:text-xl mb-6 text-black font-semibold">Tham gia cùng ATHENASTOCK – nơi bạn được thấu hiểu và đồng hành.</p>
        <button className="bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-2xl shadow-xl transition-all">Đăng ký tư vấn miễn phí</button>
      </section>
    </div>
  );
}