# Customer Fixed Model Catalog v0.1

Status: ADOPTED BASELINE

`CUSTOMER_FIXED_MODEL_POLICY_V01.md` に基づき、42基礎モデルへ打ち方を接続した固定客モデル総覧。

## 結論

固定客モデル総数: **269モデル**

- 一般生活・職業モデル: 37基礎モデル × 7打ち方 = 259
- パチプロ: 5年代 × 2打ち方 = 10
- 合計: 269

ここでは「年代だけを理由に現実に成立しうる打ち方を禁止する」ことはしない。
年代による差は主に出現ウェイト・機種嗜好・来店時間・予算・遊技時間等で表現する。
一方、固定モデルそのものに意味矛盾が生じる組み合わせは生成しない。

## 打ち方ID

- ST = 設定狙い
- HY = ハイエナ
- NW = 新台追随
- MF = 機種固定
- GB = 勝負型
- EN = エンジョイ
- NP = 無計画

一般客の基礎モデルでは上記7種を成立可能とする。

パチプロは「遊技収支を生活基盤とする」という定義との整合性を優先し、固定モデルとしては以下2種に限定する。

- ST = 設定狙い型パチプロ
- HY = ハイエナ型パチプロ

新台を狙う、特定機種を好む、荒い台を選ぶ等はパチプロでも発生可能だが、それらは主たる打ち方ではなく機種嗜好・当日判断として表現する。

---

# 20代 — 51モデル

## 20代・大学生（7）
20-UNI-ST / 20-UNI-HY / 20-UNI-NW / 20-UNI-MF / 20-UNI-GB / 20-UNI-EN / 20-UNI-NP

## 20代・アルバイト（7）
20-PT-ST / 20-PT-HY / 20-PT-NW / 20-PT-MF / 20-PT-GB / 20-PT-EN / 20-PT-NP

## 20代・会社員（7）
20-EMP-ST / 20-EMP-HY / 20-EMP-NW / 20-EMP-MF / 20-EMP-GB / 20-EMP-EN / 20-EMP-NP

## 20代・自営業（7）
20-SELF-ST / 20-SELF-HY / 20-SELF-NW / 20-SELF-MF / 20-SELF-GB / 20-SELF-EN / 20-SELF-NP

## 20代・フリーランス（7）
20-FREE-ST / 20-FREE-HY / 20-FREE-NW / 20-FREE-MF / 20-FREE-GB / 20-FREE-EN / 20-FREE-NP

## 20代・主婦（7）
20-HOME-ST / 20-HOME-HY / 20-HOME-NW / 20-HOME-MF / 20-HOME-GB / 20-HOME-EN / 20-HOME-NP

## 20代・無職（7）
20-NONE-ST / 20-NONE-HY / 20-NONE-NW / 20-NONE-MF / 20-NONE-GB / 20-NONE-EN / 20-NONE-NP

## 20代・パチプロ（2）
20-PRO-ST / 20-PRO-HY

# 30代 — 44モデル

## 30代・アルバイト（7）
30-PT-ST / 30-PT-HY / 30-PT-NW / 30-PT-MF / 30-PT-GB / 30-PT-EN / 30-PT-NP

## 30代・会社員（7）
30-EMP-ST / 30-EMP-HY / 30-EMP-NW / 30-EMP-MF / 30-EMP-GB / 30-EMP-EN / 30-EMP-NP

## 30代・自営業（7）
30-SELF-ST / 30-SELF-HY / 30-SELF-NW / 30-SELF-MF / 30-SELF-GB / 30-SELF-EN / 30-SELF-NP

## 30代・フリーランス（7）
30-FREE-ST / 30-FREE-HY / 30-FREE-NW / 30-FREE-MF / 30-FREE-GB / 30-FREE-EN / 30-FREE-NP

## 30代・主婦（7）
30-HOME-ST / 30-HOME-HY / 30-HOME-NW / 30-HOME-MF / 30-HOME-GB / 30-HOME-EN / 30-HOME-NP

## 30代・無職（7）
30-NONE-ST / 30-NONE-HY / 30-NONE-NW / 30-NONE-MF / 30-NONE-GB / 30-NONE-EN / 30-NONE-NP

## 30代・パチプロ（2）
30-PRO-ST / 30-PRO-HY

# 40代 — 44モデル

## 40代・アルバイト（7）
40-PT-ST / 40-PT-HY / 40-PT-NW / 40-PT-MF / 40-PT-GB / 40-PT-EN / 40-PT-NP

## 40代・会社員（7）
40-EMP-ST / 40-EMP-HY / 40-EMP-NW / 40-EMP-MF / 40-EMP-GB / 40-EMP-EN / 40-EMP-NP

## 40代・自営業（7）
40-SELF-ST / 40-SELF-HY / 40-SELF-NW / 40-SELF-MF / 40-SELF-GB / 40-SELF-EN / 40-SELF-NP

## 40代・フリーランス（7）
40-FREE-ST / 40-FREE-HY / 40-FREE-NW / 40-FREE-MF / 40-FREE-GB / 40-FREE-EN / 40-FREE-NP

## 40代・主婦（7）
40-HOME-ST / 40-HOME-HY / 40-HOME-NW / 40-HOME-MF / 40-HOME-GB / 40-HOME-EN / 40-HOME-NP

## 40代・無職（7）
40-NONE-ST / 40-NONE-HY / 40-NONE-NW / 40-NONE-MF / 40-NONE-GB / 40-NONE-EN / 40-NONE-NP

## 40代・パチプロ（2）
40-PRO-ST / 40-PRO-HY

# 50代 — 44モデル

## 50代・アルバイト（7）
50-PT-ST / 50-PT-HY / 50-PT-NW / 50-PT-MF / 50-PT-GB / 50-PT-EN / 50-PT-NP

## 50代・会社員（7）
50-EMP-ST / 50-EMP-HY / 50-EMP-NW / 50-EMP-MF / 50-EMP-GB / 50-EMP-EN / 50-EMP-NP

## 50代・自営業（7）
50-SELF-ST / 50-SELF-HY / 50-SELF-NW / 50-SELF-MF / 50-SELF-GB / 50-SELF-EN / 50-SELF-NP

## 50代・フリーランス（7）
50-FREE-ST / 50-FREE-HY / 50-FREE-NW / 50-FREE-MF / 50-FREE-GB / 50-FREE-EN / 50-FREE-NP

## 50代・主婦（7）
50-HOME-ST / 50-HOME-HY / 50-HOME-NW / 50-HOME-MF / 50-HOME-GB / 50-HOME-EN / 50-HOME-NP

## 50代・無職（7）
50-NONE-ST / 50-NONE-HY / 50-NONE-NW / 50-NONE-MF / 50-NONE-GB / 50-NONE-EN / 50-NONE-NP

## 50代・パチプロ（2）
50-PRO-ST / 50-PRO-HY

# 60代 — 51モデル

## 60代・アルバイト（7）
60-PT-ST / 60-PT-HY / 60-PT-NW / 60-PT-MF / 60-PT-GB / 60-PT-EN / 60-PT-NP

## 60代・会社員（7）
60-EMP-ST / 60-EMP-HY / 60-EMP-NW / 60-EMP-MF / 60-EMP-GB / 60-EMP-EN / 60-EMP-NP

## 60代・自営業（7）
60-SELF-ST / 60-SELF-HY / 60-SELF-NW / 60-SELF-MF / 60-SELF-GB / 60-SELF-EN / 60-SELF-NP

## 60代・フリーランス（7）
60-FREE-ST / 60-FREE-HY / 60-FREE-NW / 60-FREE-MF / 60-FREE-GB / 60-FREE-EN / 60-FREE-NP

## 60代・主婦（7）
60-HOME-ST / 60-HOME-HY / 60-HOME-NW / 60-HOME-MF / 60-HOME-GB / 60-HOME-EN / 60-HOME-NP

## 60代・無職（7）
60-NONE-ST / 60-NONE-HY / 60-NONE-NW / 60-NONE-MF / 60-NONE-GB / 60-NONE-EN / 60-NONE-NP

## 60代・年金暮らし（7）
60-PENS-ST / 60-PENS-HY / 60-PENS-NW / 60-PENS-MF / 60-PENS-GB / 60-PENS-EN / 60-PENS-NP

## 60代・パチプロ（2）
60-PRO-ST / 60-PRO-HY

# 70代 — 35モデル

## 70代・アルバイト（7）
70-PT-ST / 70-PT-HY / 70-PT-NW / 70-PT-MF / 70-PT-GB / 70-PT-EN / 70-PT-NP

## 70代・自営業（7）
70-SELF-ST / 70-SELF-HY / 70-SELF-NW / 70-SELF-MF / 70-SELF-GB / 70-SELF-EN / 70-SELF-NP

## 70代・主婦（7）
70-HOME-ST / 70-HOME-HY / 70-HOME-NW / 70-HOME-MF / 70-HOME-GB / 70-HOME-EN / 70-HOME-NP

## 70代・無職（7）
70-NONE-ST / 70-NONE-HY / 70-NONE-NW / 70-NONE-MF / 70-NONE-GB / 70-NONE-EN / 70-NONE-NP

## 70代・年金暮らし（7）
70-PENS-ST / 70-PENS-HY / 70-PENS-NW / 70-PENS-MF / 70-PENS-GB / 70-PENS-EN / 70-PENS-NP

---

# 年代別集計

| 年代 | 基礎モデル | 固定モデル |
|---|---:|---:|
| 20代 | 8 | 51 |
| 30代 | 7 | 44 |
| 40代 | 7 | 44 |
| 50代 | 7 | 44 |
| 60代 | 8 | 51 |
| 70代 | 5 | 35 |
| **合計** | **42** | **269** |

# 制約ルール

1. 年代×生活・職業は42基礎モデル以外を通常生成しない。
2. パチプロ以外の37基礎モデルは7打ち方を成立可能とする。ただし発生率は同一にしない。
3. パチプロの主打ち方は設定狙い/ハイエナに限定する。
4. 年代による行動差は「禁止」を増やすのではなく、原則としてウェイトとパラメータ範囲で表現する。
5. 個体生成時には固定モデルごとの経済力・時間・性格・知識・技術等の許容範囲を適用する。
6. 明らかな属性矛盾は個体生成バリデーションで拒否し、再抽選する。
7. 常連度は固定モデルに含めず、実際の来店履歴から変化する状態として保持する。

# 次工程

269モデルそれぞれに個別の数値を手入力するのではなく、

- 年代係数
- 生活・職業係数
- 打ち方係数
- 組み合わせ補正

を合成して初期パラメータ範囲・出現ウェイトを生成する。

これにより269モデルを固定しながら、調整量の爆発を防ぐ。
