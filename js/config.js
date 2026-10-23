/**
 * NEURON GEN 9 - CAST THE LIGHT: HOÀ ĐIỆU BẢN SẮC
 * Configuration File
 * Dễ dàng cập nhật các đường link, ngày giờ hạn chót và thông tin liên hệ tại đây.
 */

const APP_CONFIG = {
  // Tên chương trình
  campaignName: "Cast The Light - Hoà điệu bản sắc",
  generation: "Gen 9",
  clubName: "CLB Truyền Thông NEURON - Đại học Kinh tế Quốc dân (NEU)",

  // Mốc thời gian đếm ngược đóng đơn Vòng 1 (The Casting)
  // Định dạng: YYYY-MM-DDTHH:mm:ss (Ví dụ: 23:59:59 ngày 30/10/2026)
  countdownDeadline: "2026-10-30T23:59:59",

  // Các đường link chờ cập nhật (Khi team có link chỉ cần dán vào đây là nút sẽ tự nhận)
  links: {
    googleForm: "https://docs.google.com/forms/d/e/1FAIpQLSdZVPvIwteWbP50gXi96TEO7Fr_WGDqTHWISz13DHi7v0obdg/viewform", // Link Google Form chính thức
    booklet: "",    // Link Booklet / Thể lệ tuyển chi tiết (Google Drive/PDF)
    musicUrl: "",   // Link nhạc nền (Audio stream URL hoặc SoundCloud link)
    fanpage: "https://www.facebook.com/ncc.neu",
    email: "clbneuron.neu@gmail.com",
    hotline: "0946829848",
    hotlineDisplay: "(+84) 946 829 848 (Ms. Nhi)",
    address: "Trường Đại học Kinh tế Quốc dân (NEU), 207 Giải Phóng, Bạch Mai, Hà Nội"
  },

  // Timeline 3 Vòng Broadway
  timeline: [
    {
      round: "Vòng 1",
      code: "THE CASTING",
      date: "23/10 - 30/10",
      status: "active", // active (đang diễn ra), upcoming (sắp diễn ra), completed (đã kết thúc)
      desc: "Vòng nộp đơn ứng tuyển trực tuyến. Nơi bạn thể hiện màu sắc cá nhân và gửi gắm câu chuyện của mình lên sân khấu NEURON.",
      detailBadge: "Đang mở đơn"
    },
    {
      round: "Vòng 2",
      code: "THE REHEARSAL",
      date: "05/11 - 11/11",
      status: "upcoming",
      desc: "Vòng thử thách & tập dượt chuyên môn. Bạn cùng các đồng đội tương lai sẽ trải nghiệm giải bài toán thực tế và cọ xát năng lực chuyên sâu.",
      detailBadge: "Sắp diễn ra"
    },
    {
      round: "Vòng 3",
      code: "THE FIRST PERFORMANCE",
      date: "14/11 - 16/11",
      status: "upcoming",
      desc: "Đêm diễn đầu tiên và buổi phỏng vấn trực tiếp cùng Ban Chủ nhiệm & Trưởng các ban để cùng nhau thắp sáng bản sắc riêng.",
      detailBadge: "Sắp diễn ra"
    }
  ],

  // Chi tiết 5 Ban Chuyên Môn
  departments: {
    rnd: {
      name: "Ban R&D",
      fullName: "Nghiên cứu & Phát triển (Research & Development)",
      tagline: "Nơi khởi nguồn của mọi ý tưởng đột phá",
      icon: "lightbulb",
      badge: "Chiến Lược & Sáng Tạo",
      description: "R&D là nơi khởi nguồn của mọi dự án tại NEURON. Ban chịu trách nhiệm nghiên cứu thị trường, tìm hiểu nhu cầu thực tế của giới trẻ và sinh viên để lên ý tưởng ngay từ những bước đầu tiên. Từ việc brainstorm, phát triển concept cho đến xây dựng kế hoạch tổng thể, R&D đặt nền móng vững chắc để cả team có định hướng rõ ràng và tạo nên sự khác biệt.",
      responsibilities: [
        "Nghiên cứu xu hướng Marketing, hành vi công chúng mục tiêu và thị trường truyền thông số.",
        "Brainstorm, lên ý tưởng, xây dựng Master Plan và Proposal tổng thể cho các chiến dịch/sự kiện.",
        "Phát triển concept nội dung độc đáo cho hệ sinh thái dự án (MarCom News, Tiệm của Cáo, Nộm).",
        "Đánh giá hiệu quả chiến dịch và đo lường mức độ tiếp cận thực tế sau mỗi dự án."
      ],
      suitableFor: [
        "Những bạn tò mò, thích quan sát xã hội và đam mê tìm kiếm lời giải cho các bài toán mới.",
        "Có tư duy logic, phản biện sắc bén và khả năng nhìn nhận vấn đề đa chiều.",
        "Yêu thích việc lên chiến lược, lập kế hoạch và định hình hướng đi cho tập thể."
      ]
    },
    media: {
      name: "Ban Truyền thông",
      fullName: "Truyền thông & Sáng tạo Nội dung (Media & Content)",
      tagline: "Ban thổi hồn cho ý tưởng thành câu chuyện cảm xúc",
      icon: "megaphone",
      badge: "Lan Toả & Chạm Cảm Xúc",
      description: "Khi concept đã được hình thành, Ban Truyền thông biến nó thành những câu chuyện và thông điệp chạm đến cảm xúc của công chúng. Từ việc xây dựng nội dung fanpage, lên kế hoạch đăng bài đa kênh cho đến triển khai các chiến dịch lan tỏa, Ban Truyền thông giúp dự án được hàng chục nghìn người biết đến, quan tâm và đồng hành.",
      responsibilities: [
        "Sáng tạo nội dung (Copywriting/Storytelling) cho các kênh truyền thông chính thức của NEURON.",
        "Lập kế hoạch nội dung tuần/tháng, quản lý lịch xuất bản bài viết và điều hướng tương tác mạng xã hội.",
        "Xây dựng kịch bản truyền thông tích hợp (IMC Plan), triển khai seeding và tối ưu tiếp cận.",
        "Bắt trend nhanh nhạy, biên tập các chuyên mục tin tức và bài phân tích marketing chuyên sâu."
      ],
      suitableFor: [
        "Có năng khiếu viết lách, nhạy cảm với con chữ và am hiểu tâm lý người đọc thế hệ Gen Z.",
        "Bắt trend nhanh như chớp, luôn tràn ngập ý tưởng sáng tạo dí dỏm hoặc sâu lắng.",
        "Mong muốn làm chủ nghệ thuật kể chuyện thương hiệu và định hướng dư luận tích cực."
      ]
    },
    production: {
      name: "Ban Sản xuất",
      fullName: "Sản xuất Hình ảnh & Video (Design & Multimedia)",
      tagline: "Biến ý tưởng trên giấy thành hiện thực sống động",
      icon: "palette",
      badge: "Thẩm Mỹ & Kỹ Thuật",
      description: "Ban Sản xuất là nơi hội tụ của design, edit, quay và chụp. Từ việc thiết kế bộ nhận diện thương hiệu, ấn phẩm truyền thông đa định dạng, ghi lại những khoảnh khắc đáng nhớ trong từng sự kiện cho đến dựng video và hậu kỳ hoàn chỉnh. Nhờ sự sáng tạo và con mắt thẩm mỹ tinh tế của ban, mọi ý tưởng trên giấy đều được hiện thực hóa rực rỡ và đầy cảm xúc.",
      responsibilities: [
        "Thiết kế trọn bộ ấn phẩm 2D/3D (Key Visual, Poster, Banner, Infographic, Merchandise).",
        "Lên storyboard, quay phim, chụp ảnh tại các sự kiện lớn nhỏ và dự án của CLB.",
        "Dựng video (Shorts, Reels, Recap Video, Trailer, Teaser) với hiệu ứng thị giác và âm thanh cuốn hút.",
        "Định hình phong cách mỹ thuật và bảo đảm tính nhất quán của bộ nhận diện thương hiệu NEURON."
      ],
      suitableFor: [
        "Có gu thẩm mỹ tốt, tư duy thị giác sáng tạo và niềm đam mê với nghệ thuật hình ảnh.",
        "Biết sử dụng hoặc ham học hỏi các phần mềm đồ họa (Photoshop, Illustrator, Premiere, After Effects, CapCut, Figma...).",
        "Thích cầm máy bắt trọn những khoảnh khắc đắt giá và thổi hồn cảm xúc vào từng khung hình."
      ]
    },
    pr: {
      name: "Ban Đối ngoại",
      fullName: "Quan hệ Đối tác & Tài trợ (Public Relations & Partnership)",
      tagline: "Cầu nối vững chắc giữa dự án và cộng đồng",
      icon: "handshake",
      badge: "Đàm Phán & Mở Rộng",
      description: "Ban Đối ngoại chịu trách nhiệm làm việc với các đối tác doanh nghiệp, nhà tài trợ, diễn giả chuyên gia và các tổ chức để kêu gọi nguồn lực cả về tài chính lẫn hiện vật. Đây chính là bệ đỡ tài chính và bảo trợ chuyên môn quan trọng giúp mọi dự án của NEURON đủ điều kiện thực hiện một cách chuyên nghiệp và trọn vẹn nhất.",
      responsibilities: [
        "Tìm kiếm, tiếp cận và đàm phán hợp tác với các nhãn hàng, doanh nghiệp và nhà tài trợ tiềm năng.",
        "Soạn thảo hồ sơ mời tài trợ (Sponsorship Proposal), hợp đồng và quản lý quyền lợi đối tác.",
        "Mời và làm việc với các diễn giả, chuyên gia đầu ngành trong các buổi talkshow, workshop.",
        "Điều phối hoạt động chăm sóc đối tác, xây dựng mạng lưới quan hệ công chúng bền vững."
      ],
      suitableFor: [
        "Tự tin trong giao tiếp, khéo léo trong ứng xử và yêu thích việc mở rộng kết nối với con người.",
        "Có khả năng đàm phán, thuyết phục và phong thái làm việc chỉn chu, chuyên nghiệp.",
        "Mong muốn cọ xát với môi trường doanh nghiệp thực tế ngay từ khi còn ngồi trên ghế giảng đường."
      ]
    },
    hr: {
      name: "Ban Nhân sự",
      fullName: "Quản trị Nhân sự & Văn hoá (Human Resources & Culture)",
      tagline: "Chăm lo yếu tố con người – Giữ lửa nhiệt huyết cho cả đội ngũ",
      icon: "heart-handshake",
      badge: "Gắn Kết & Đồng Lòng",
      description: "Đúng với tôn chỉ 'Con người đi trước, công việc theo sau', Ban Nhân sự quản lý, chăm sóc và điều phối thành viên, đồng thời tổ chức các hoạt động bonding nội bộ để mọi người thấu hiểu, yêu thương và gắn kết với nhau hơn. Một tập thể đồng lòng, hạnh phúc chính là động lực lớn nhất để NEURON vượt qua mọi thử thách.",
      responsibilities: [
        "Theo dõi, đánh giá mức độ tương tác và phát triển năng lực của từng thành viên trong CLB.",
        "Tổ chức các sự kiện nội bộ: Bonding, Sinh nhật CLB, Teambuilding, Year End Party ấm cúng.",
        "Lắng nghe tâm tư, giải quyết các mâu thuẫn nội bộ và xây dựng môi trường lành mạnh, an toàn.",
        "Vận hành quy trình tuyển dụng tân thành viên và onboarding thế hệ mới Gen 9."
      ],
      suitableFor: [
        "Ấm áp, biết lắng nghe, có EQ cao và luôn quan tâm đến cảm xúc của những người xung quanh.",
        "Có kỹ năng quan sát, tổ chức trò chơi, khuấy động không khí và kết nối tập thể.",
        "Yêu thích việc phát triển con người và mong muốn kiến tạo một 'ngôi nhà thứ hai' ấm áp."
      ]
    }
  },

  // 3 Dự án số trực thuộc
  projects: {
    marcom: {
      name: "MarCom News",
      slogan: "One touch to catch trends",
      badge: "Trang tin Marketing",
      imageText: "MN",
      desc: "Trang tin tức marketing hiện đại, cập nhật nhanh nhạy những chuyển động mới nhất của thị trường truyền thông trong nước và quốc tế. Nội dung cô đọng, sắc bén và dễ tiếp cận chỉ trong 1 lần chạm.",
      fanpage: "https://www.facebook.com/marcom.news?locale=vi_VN",
      highlights: [
        "Phân tích các chiến dịch quảng cáo đình đám vừa lên sóng.",
        "Cập nhật các số liệu báo cáo xu hướng ngành Marketing.",
        "Bình luận chuyên sâu dưới góc nhìn người trẻ đa chiều."
      ]
    },
    tiemcacao: {
      name: "Podcast Tiệm của Cáo",
      slogan: "Lắng nghe vấn đề, giải đáp tương tư",
      badge: "Podcast & Tâm sự",
      imageText: "TC",
      desc: "Kênh podcast mang nhịp điệu trầm lắng, nơi những trăn trở của tuổi trẻ được chia sẻ một cách chân thành nhất. Là trạm dừng chân bình yên để người nghe chậm lại, thấu hiểu chính mình và kết nối với thế giới.",
      fanpage: "https://www.facebook.com/TiemcuaCao?locale=vi_VN",
      highlights: [
        "Những cuộc trò chuyện sâu sắc về hành trình trưởng thành của sinh viên.",
        "Không gian an toàn chia sẻ áp lực đồng trang lứa và định hướng tương lai.",
        "Được sản xuất chỉn chu từ giọng đọc, âm nhạc đến thông điệp chữa lành."
      ]
    },
    nom: {
      name: "Nộm",
      slogan: "Xào câu, nấu ads",
      badge: "Sân chơi sáng tạo",
      imageText: "NM",
      desc: "Biến những ý tưởng quảng cáo thành những 'món ăn tinh thần' hấp dẫn, hóm hỉnh và cực kỳ bắt trend. Khai thác lăng kính hài hước về các chiêu thức marketing giúp người xem vừa giải trí vừa học thêm cách nêm nếm một chiến dịch.",
      fanpage: "https://www.facebook.com/Nomlaminh?locale=vi_VN",
      highlights: [
        "Chế meme và phân tích các quảng cáo viral dưới góc nhìn hài hước.",
        "Sân chơi tương tác sôi nổi giữa các bạn trẻ yêu thích sáng tạo.",
        "Trộn lẫn gia vị đời sống sinh viên vào các bài học truyền thông thực tiễn."
      ]
    }
  },

  // Dấu ấn & Sự kiện nổi bật
  events: [
    {
      id: "snn",
      title: "Cộng tác Truyền thông: Sao Nhập Ngũ 2026",
      tag: "Dấu ấn Quốc gia",
      desc: "NEURON tự hào khẳng định năng lực thực chiến linh hoạt qua vai trò CTV Truyền thông cho chương trình Truyền hình thực tế đình đám Sao Nhập Ngũ 2026, đưa hình ảnh và thông điệp người lính đến hàng triệu khán giả trẻ."
    },
    {
      id: "tramhienmau",
      title: "Trạm Hiến Máu - Chạm Yêu Thương",
      tag: "Sự kiện Xã hội",
      desc: "Đồng Ban tổ chức cuộc thi về hiến máu đầu tiên dành cho giới trẻ, kết nối hàng nghìn trái tim nhân ái và lan tỏa thông điệp sẻ chia giọt máu cứu người đầy nhân văn."
    },
    {
      id: "sis",
      title: "Chiến dịch thường niên: SMARTER IN SMALL",
      tag: "Chiến dịch Thường niên",
      desc: "Chuỗi chiến dịch thường niên tôn vinh những hành động nhỏ tạo nên thay đổi lớn trong cộng đồng, rèn luyện tư duy thực thi chiến dịch truyền thông đa kênh cho toàn thể thành viên."
    },
    {
      id: "exhibitions",
      title: "Triển lãm MICROTRIDE & The Knot of Love",
      tag: "Nghệ thuật & Cảm xúc",
      desc: "Các không gian trải nghiệm nghệ thuật thị giác và kết nối cảm xúc độc bản, thu hút đông đảo sinh viên toàn thành phố Hà Nội ghé thăm và tương tác."
    },
    {
      id: "talkshows",
      title: "Chuỗi Talkshow & Workshop Chuyên Môn",
      tag: "Tri thức & Kỹ năng",
      desc: "Quy tụ các chuyên gia hàng đầu từ các tập đoàn và Agency lớn, mang đến những góc nhìn thực tế về thị trường lao động và kỹ năng nghề nghiệp thực chiến."
    },
    {
      id: "bonding",
      title: "Hoạt động Teambuilding & Bonding Văn Hoá",
      tag: "Gắn kết Gia đình",
      desc: "Những chuyến dã ngoại, cắm trại, sinh nhật CLB tràn ngập tiếng cười và kỷ niệm thanh xuân rực rỡ, nơi gắn kết mọi thế hệ thành viên thành một gia đình bền chặt."
    }
  ],

  // Câu hỏi thường gặp (FAQ)
  faqs: [
    {
      q: "Sinh viên năm mấy có thể tham gia ứng tuyển Gen 9?",
      a: "NEURON mở rộng cánh cửa đón chào tất cả các bạn sinh viên (đặc biệt là K64, K65, K66 và tân sinh viên K67) đang theo học tại Trường Đại học Kinh tế Quốc dân cũng như các trường đại học khác trên địa bàn Hà Nội có chung niềm đam mê với Truyền thông & Marketing."
    },
    {
      q: "Mình chưa có kinh nghiệm về Marketing hay kỹ năng chuyên môn thì có nộp được không?",
      a: "Hoàn toàn ĐƯỢC bạn nhé! Với tôn chỉ 'Con người đi trước, công việc theo sau', NEURON đánh giá cao nhất sự nhiệt huyết, tinh thần ham học hỏi, trách nhiệm và tính kỷ luật. Khi trở thành thành viên Gen 9, bạn sẽ được đào tạo bài bản từ đầu qua các chương trình Training nội bộ độc quyền."
    },
    {
      q: "Mình có thể đăng ký ứng tuyển cùng lúc 2 ban được không?",
      a: "Được bạn nhé! Trong đơn đăng ký, bạn được phép chọn Nguyện vọng 1 (NV1) và Nguyện vọng 2 (NV2). Ban Tuyển dụng sẽ xem xét đánh giá dựa trên mức độ phù hợp và nguyện vọng ưu tiên của bạn."
    },
    {
      q: "Thời gian hoạt động tại CLB có ảnh hưởng đến việc học trên lớp không?",
      a: "NEURON luôn khuyến khích và tạo điều kiện tối đa để các thành viên đảm bảo kết quả học tập tại trường. Lịch họp và dự án luôn được sắp xếp linh hoạt, đồng thời các anh chị tiền bối luôn sẵn sàng chia sẻ kinh nghiệm học tập và tài liệu thi cử để cùng nhau tiến bộ."
    },
    {
      q: "Sau khi nộp đơn qua Google Form, khi nào mình sẽ nhận được kết quả Vòng 1?",
      a: "Sau khi cổng đơn đóng vào ngày 30/10, Ban Nhân sự NEURON sẽ tiến hành chấm và gửi email thông báo kết quả Vòng 1: The Casting kèm lời mời tham gia Vòng 2 tới hòm thư cá nhân của bạn. Hãy luôn theo dõi email (kể cả hòm thư Spam/Quảng cáo) và fanpage CLB nhé!"
    }
  ]
};

// Export to window
window.APP_CONFIG = APP_CONFIG;
