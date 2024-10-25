import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Leptop from '@/../public/leptop.jpg'
import Button from '@/components/Button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={Leptop} fill={true} alt="" className={styles.img} />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid delectus fuga animi magni obcaecati sint et
                        dolorum ratione quod maiores earum, illum qui
                        repellendus quasi natus error magnam hic ullam? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid delectus fuga animi magni obcaecati sint et
                        dolorum ratione quod maiores earum, illum qui distinctio
                        modi pariatur
                        <br />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Optio, dolores. Beatae laudantium enim
                        consequuntur dolores debitis mollitia harum repellendus
                        laborum distinctio aspernatur. Nulla eaque, magnam
                        veritatis fugit modi ut ipsa suscipit enim rem eum est
                        dolorem nisi
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quas architecto neque veniam vero laborum alias eius
                        quaerat nostrum vel expedita sint harum beatae aut hic
                        dolorem enim, culpa eos quasi sequi dolorum natus
                        laudantium consectetur ratione? Reiciendis non facere
                        <br />
                        <br /> - Dynamic Website
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About
