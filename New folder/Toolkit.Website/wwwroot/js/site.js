let cropperInstance = null;

function initializeCropper(imageElement) {
    if (cropperInstance) {
        cropperInstance.destroy(); // ลบ instance เดิมถ้ามี
    }
    cropperInstance = new Cropper(imageElement, {
        aspectRatio: 1, // กำหนดสัดส่วน (เปลี่ยนตามความต้องการ เช่น 1 สำหรับสี่เหลี่ยมจตุรัส)
        viewMode: 2, // โหมดการแสดงผล
        autoCropArea: 0.8, // ขนาดพื้นที่ที่ถูกครอบอัตโนมัติ (0.8 = 80%)
        movable: true, // เปิดใช้งานการย้ายรูปภาพ
        zoomable: true, // เปิดใช้งานการซูม
        rotatable: true, // เปิดใช้งานการหมุน
        scalable: true, // เปิดใช้งานการปรับขนาด
    });
}

function getCroppedImage() {
    if (!cropperInstance) {
        console.error("Cropper instance is not initialized.");
        return null;
    }

    // แปลงภาพที่ครอปเป็น Base64
    return cropperInstance.getCroppedCanvas().toDataURL();
} function getCroppedCanvasDataURL() {
    const cropper = document.querySelector('.cropper-container').cropper;
    return cropper.getCroppedCanvas().toDataURL();
}
