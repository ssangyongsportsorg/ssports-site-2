import React from 'react';
import Layout from '@theme/Layout';
import styles from './demo.module.css';
import ReactiveButton from 'reactive-button';


function Form() {
  return (
    <Layout title="聯絡">
      <main>
      <div className={styles.content}>
          <h1>
         聯繫雙龍體育團隊
          </h1>
       
        
                </div>
        <div className={styles.formwrapper}>
          <div className={styles.formbox}>
            <form
              action="https://submit-form.com/yFAbXMpc"
              name="聯繫表單"
              method="POST"
    
            >
              <input type="hidden" name="form-name" value="聯繫表單" />
              <p>
                <label>
                  名稱
                  <input
                    type="text"
                    name="name"
                    placeholder="你的名字"
                    required
                  />
                </label>
              </p>
              <p>
                <label>
                  電子郵件
                  <input
                    reqpuired
                    type="email"
                    name="email"
                    placeholder="name@ssangyongsports.org"
                  />
                </label>
<input
    type="hidden"
    name="_redirect"
    value="https://www.ssangyongsports.org/thanks"
  />
                <label>
                  問題
                  <textarea
                    name="留言"
                    placeholder="輸入..."
                    rows="3"
                  ></textarea>
                </label>
              </p>
              <p>
                      
                    <ReactiveButton  type={'submit'} idleText="提交" />
                     

              </p>
            </form>


          </div>

        </div>
      </main>
    </Layout>
  );
}

export default Form;
