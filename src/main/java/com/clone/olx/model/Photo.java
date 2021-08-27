package com.clone.olx.model;

import lombok.Getter;
import lombok.Setter;

import javax.imageio.ImageIO;
import javax.persistence.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Table(name = "photos")
@Entity
@Getter
@Setter
public class Photo {
    @Id
    @Column(name = "photo_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private byte[] img;
    private String imgName;

    public Photo(File image, String imgName) throws IOException {
        this.img = extractBytes(image);
        this.imgName = imgName;
    }

    public Photo() {
    }

    public byte[] extractBytes(File image) throws IOException {
        BufferedImage bufferedImage = ImageIO.read(image);

        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        ImageIO.write(bufferedImage, "jpg", bos);

        return bos.toByteArray();
    }

    public File getImage() throws IOException {
        File image = new File("output.jpg");

        ByteArrayInputStream bis = new ByteArrayInputStream(img);
        BufferedImage bImage2 = ImageIO.read(bis);

        ImageIO.write(bImage2, "jpg", image);
        System.out.println("image created");
        return image;
    }


}

