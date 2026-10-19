# マァサン-30

machineName: マァサン-30
manufacturer: アルチザン
releaseDate: 2008-01
releaseDatePrecision: MONTH_ONLY
modelName: マァサン-30
approvalNumber: 7S0676
generation: 5号機
systemType: ノーマル / 30Φ
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
confidence: CORE_LOW_MEDIUM / RESET_LOW

## identity

- P-WORLDでメーカー「アルチザン」、型式名「マァサン-30」、5号機ノーマル、30Φ、検定番号7S0676を確認。
- ラスターの25Φ機「まぁさん」（既存 `2008-01-21_maasan.md`）とはメーカー・表記・型式・口径が異なる別機種として扱う。
- 後年一覧でも「まぁさん / ラスター」と「マァサン-30 / アルチザン」は別行掲載。混同・性能流用しない。

## releaseDateEvidence

- Pacnkの2008年度機種一覧で `2008年1月 マァサン‐30(アルチザン)` と掲載。
- P-WORLD本体の「導入開始」は空欄だが、同機種掲示板に2008-01-11、2008-01-15付の機種言及が残る。
- 後年のスロリスクタイムは年代を「不明」とするため、日精度は確定しない。
- 本DBでは複数資料の整合する月精度 `2008-01` を採用し、具体導入日は `UNVERIFIED_AFTER_RESEARCH` とする。

## payoutRateBySetting

- `UNVERIFIED_AFTER_RESEARCH`
- 「マァサン-30 / マァサン30 / マァサン‐30 / アルチザン / 型式マァサン-30 / 7S0676」と「機械割 / PAY OUT / 出玉率 / 設定1 / 設定6」を組み替えて、P-WORLD、Pacnk、後年機種一覧、一般検索を横断したが本機固有の設定別機械割を確定できず。
- 同名に近いラスター「まぁさん」や後年エマ機の数値は流用しない。

## initialHitBySetting

- `UNVERIFIED_AFTER_RESEARCH`
- P-WORLD現存ページはボーナス払い出し条件を掲載するが、設定別BIG/MIDDLE確率の表は確認できず。
- 「BIG確率 / MIDDLE BONUS / REG確率 / ボーナス合成 / 設定差」等へ検索語を変えたが、直接値は確定できず。

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`
- 「50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数」で表記揺れを含めて再探索したが、比較可能な本機固有値は確認できず。

## netIncrease

- 非該当扱い。
- P-WORLDは本機を5号機ノーマルと分類し、現存資料ではRT/ART/ATによる増加区間を確認できない。
- 完全再現用の内部仕様を推測して追加しない。

## basicPayout

P-WORLD掲載の払い出し終了条件:
- BIG BONUS: 345枚を超える払い出しで終了
- MIDDLE BONUS: 119枚を超える払い出しで終了

実純増枚数は現存資料から確定できず `UNVERIFIED_AFTER_RESEARCH`。払い出し終了条件と純増を混同しない。

## modeSpecificMinimumData

- 30Φノーマル機。
- P-WORLD掲示板には告知の「違和感」に触れる当時投稿があるが、投稿内容を仕様値として採用しない。
- RT/ART/AT、通常時モード、天井の存在を示す高信頼な公開資料は今回確認できず。

## v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 「設定変更 / リセット / 朝一 / RAMクリア」を機種名・型式・メーカーと組み替えて探索したが、本機固有の設定変更時処理を直接説明する資料は確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 据え置き時の本機固有処理を示す直接資料は確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 電源OFF→ONのみの挙動を示す直接資料は確定できず。
- gameCounterReset: `NONE_CONFIRMED`
  - 通常時ゲーム数天井・規定ゲーム数契機は確認できず。ノーマル機という分類のみから内部カウンタ仕様を推測しない。
- ceilingAfterReset: `NONE_CONFIRMED`
  - リセット時の短縮天井・変更天井の公開値は確認できず。
- modeAfterReset: `NONE_CONFIRMED`
  - 朝一専用モード、設定変更時モード再抽選、公開モード振分は確認できず。
- stateAfterReset: `NONE_CONFIRMED`
  - 朝一稼働へ影響する設定変更専用状態、RT/ART状態は確認できず。
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
  - 「ガックン / 初期出目 / 設定変更判別 / 据え置き判別」まで検索語を広げたが、本機固有の判別法は確定できず。
- numericResetData: `NONE_CONFIRMED`
  - 朝一特定G以内当選率、リセット恩恵発生率、短縮天井G数などの公開数値は確認できず。

resetBehaviorConfidence: LOW

## conflicts

- `IDENTITY_SEPARATION_REQUIRED`: ラスター「まぁさん」とアルチザン「マァサン-30」は別機種。名称が近いため数値混入リスクが高いが、メーカー・口径・型式を根拠に分離。
- `APPROVAL_NUMBER_REUSE_NOTE`: P-WORLDは本機の検定番号を7S0676と掲載。後年の別メーカー・別型式にも同番号表記の検索結果が存在するため、検定番号単独で別資料を同定せず、機種名・メーカー・型式の一致を必須とした。

## sources

取得日: 2026-09-01

1. P-WORLD — マァサン‐30
   - https://www.p-world.co.jp/machine/database/5046
   - アルチザン、5号機ノーマル、30Φ、型式名マァサン-30、検定番号7S0676、BIG345枚超/MIDDLE119枚超払い出し終了を確認。導入開始欄は空欄。2008-01-11/15の掲示板機種言及あり。
   - reliability: INDUSTRY_DB_MEDIUM_HIGH
2. パチンコFAN / Pacnk — 機種一覧：2008年度
   - https://pacnk.com/photoslot/mlist_2008.html
   - 2008年1月欄にマァサン‐30（アルチザン）を掲載。
   - reliability: RETROSPECTIVE_DB_MEDIUM
3. スロリスクタイム — 「ま行」の5号機一覧 / ノーマルタイプ一覧
   - https://pachisuro100.com/magyo/
   - https://pachisuro100.com/normal/
   - アルチザンのマァサン-30をノーマルとして掲載し、ラスター「まぁさん」と別行。年代は不明。
   - reliability: RETROSPECTIVE_DB_LOW_MEDIUM

## missingFields

- 具体導入日。
- 設定構成。
- 設定別機械割/出玉率。
- 設定別BIG/MIDDLE/合算確率。
- 50枚あたりゲーム数/ベース。
- BIG/MIDDLEの実純増枚数。
- 本機固有の設定変更/据え置き/電源OFF→ON挙動。
- 本機固有のガックン・初期出目等の変更判別。
