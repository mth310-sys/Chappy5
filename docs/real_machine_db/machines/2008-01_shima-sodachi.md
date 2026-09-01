# 島育ち

machineName: 島育ち
manufacturer: オリンピア
releaseDate: 2008-01
releaseDatePrecision: MONTH_ONLY
modelName: 島育ち
approvalNumber: UNVERIFIED_AFTER_RESEARCH
generation: 5号機
systemType: ノーマル / ボーナス主体 / 完全告知系
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
confidence: CORE_MEDIUM_HIGH / RESET_LOW

## identity

- オリンピア公式の旧製品一覧に「島育ち25φ」を確認。
- P-WORLD、K-Naviとも機種名「島育ち」、メーカー「オリンピア」の5号機として扱う。
- 4号機「南国育ち」「島唄」、後年の「南国育ち」「島娘」等とは別機種。シリーズ類似仕様を流用しない。

## releaseDateEvidence

- Pacnkの2008年度一覧は `2008年1月 島育ち(オリンピア)` と掲載。
- 5号機クロニクルも導入日を2008年1月とする。
- オリンピア公式旧製品一覧では製品存在は確認できるが、現存ページ抽出から日単位の発売日は確定できない。
- 「島育ち / 島育ち25φ / オリンピア」と「発売 / 納品 / 導入 / 内覧会 / 2008年1月 / 1月21日 / 1月28日」等を組み替え、公式・P-WORLD・K-Navi・後年DB・当時系履歴を再探索したが具体日を確定できず、本DBでは月精度 `2008-01` とする。

## payoutRateBySetting

### K-Navi系列
- 設定1: 96.2%
- 設定2: 98.2%
- 設定3: 100.1%
- 設定4: 103.1%
- 設定5: 106.1%
- 設定6: 110.3%
- reliability: ANALYSIS_HIGH

### 5号機クロニクル系列
- 設定1: 97.1%
- 設定2: 99.3%
- 設定3: 101.5%
- 設定4: 103.8%
- 設定5: 107.1%
- 設定6: 110.6%
- reliability: RETROSPECTIVE_DB_MEDIUM

判定: `CONFLICT`
- 全設定で差があり、単純丸めでは説明しにくいため平均化しない。
- K-Navi/P-WORLD/現存実機資料が一致するボーナス仕様に対し、5号機クロニクルはRT機・REG約104枚という別仕様を併記しているため、後者の機械割系列は仕様同定上も注意が必要。

## initialHitBySetting

P-WORLD / K-Naviで一致:

### BIG
- 設定1: 1/278
- 設定2: 1/266
- 設定3: 1/257
- 設定4: 1/247
- 設定5: 1/234
- 設定6: 1/221

### REG
- 設定1: 1/127
- 設定2: 1/125
- 設定3: 1/122
- 設定4: 1/119
- 設定5: 1/114
- 設定6: 1/109

### ボーナス合算
- 設定1: 1/87
- 設定2: 1/85
- 設定3: 1/83
- 設定4: 1/80
- 設定5: 1/77
- 設定6: 1/73

reliability: ANALYSIS_HIGH / INDUSTRY_DB_MEDIUM_HIGH

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`
- 「50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数 / 通常時回転数」と機種名・メーカー名を組み替え、P-WORLD、K-Navi、5号機クロニクル、旧実機販売資料、一般検索を横断したが比較可能な本機固有値を確定できず。

## netIncrease

- `NOT_APPLICABLE` を主判定。
- K-Naviは本機を「完全ノーマルタイプ」と明記し、P-WORLD掲載仕様もBIG/REGのみでRT増加区間を示さない。
- 5号機クロニクルのみ「Aタイプ（RT機能付き）」「ときめきゾーン」等を記載するが、P-WORLD・K-Navi・現存実機販売資料の一致系列と根本的に異なるため `CONFLICT_SOURCE_SPEC` として隔離し、純増値を物差し性能へ採用しない。

## basicPayout

P-WORLD / 現存実機販売資料で一致:
- BIG BONUS: 345枚を超える払い出しで終了、実獲得目安 約312枚、2枚掛け専用。
- REGULAR BONUS: 10枚を超える払い出しで終了、実獲得目安 約14枚、3枚掛け専用。

K-Navi:
- BIGは345枚超払い出し終了、REGは10枚超払い出し終了を確認。

5号機クロニクル:
- BIG最大375枚 / REG約104枚とし、上記系列と競合。

判定: 主系列は `BIG約312枚 / REG約14枚`。後年DB系列は `CONFLICT_SOURCE_SPEC` として別保持。

## modeSpecificMinimumData

- 主系列では完全ノーマルタイプ / 完全告知系として扱う。
- BIG/REG合算が設定1でも約1/87と非常に軽いボーナス主体構造。
- 通常時ゲーム数天井、周期CZ、ART/AT、朝一専用モードを示す高信頼資料は確認できない。
- 5号機クロニクルのRT記述は主系列と仕様が一致しないため内部仕様として採用しない。

## v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 「設定変更 / リセット / RAMクリア / 朝一」と機種名・メーカーを組み替え、攻略・旧DB・当時系資料を再探索したが本機固有の設定変更時処理を直接説明する資料は確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 据え置き時に持ち越す本機固有のゲーム数・状態を示す直接資料は確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 電源OFF→ONのみの初期出目・ランプ・内部状態処理を示す直接資料は確定できず。
- gameCounterReset: `NONE_CONFIRMED`
  - 通常時ゲーム数天井・規定G数契機は確認できず。ノーマル機という分類だけから内部カウンタ不存在を断定しない。
- ceilingAfterReset: `NONE_CONFIRMED`
  - リセット時短縮天井・変更天井の公開値なし。
- modeAfterReset: `NONE_CONFIRMED`
  - 朝一専用モード、設定変更時モード振り分けは確認できず。
- stateAfterReset: `NONE_CONFIRMED`
  - 朝一客行動に影響する設定変更専用状態は確認できず。
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
- resetPenalties: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
  - 「ガックン / 初期出目 / ランプ / 設定変更判別 / 据え置き判別」まで検索語を変更したが、本機固有の変更判別法を確定できず。
- numericResetData: `NONE_CONFIRMED`
  - 朝一特定G以内当選率、リセット恩恵発生率、短縮天井G数などの公開朝一数値は確認できず。

resetBehaviorConfidence: LOW

## conflicts

### CONFLICT_PAYOUT_RATE
- K-Navi: 96.2 / 98.2 / 100.1 / 103.1 / 106.1 / 110.3%
- 5号機クロニクル: 97.1 / 99.3 / 101.5 / 103.8 / 107.1 / 110.6%
- 平均化しない。

### CONFLICT_SOURCE_SPEC
- P-WORLD / K-Navi / 現存実機販売資料:
  - 完全ノーマル系。
  - BIG約312枚、REG約14枚。
  - BIG 1/278→1/221、REG 1/127→1/109。
- 5号機クロニクル:
  - Aタイプ（RT機能付き）と分類。
  - BIG最大375枚、REG約104枚、RT関連記述あり。
- 同名・別仕様混入または後年整理誤りの可能性はあるが断定せず、競合資料として隔離。物差しの主値には複数一致する前者を採用。

## sources

取得日: 2026-09-01

1. 株式会社オリンピア — 2008年以前の発売機種
   - https://www.olympia.co.jp/official/products/2005.html
   - 「島育ち25φ」の製品存在を確認。
   - reliability: OFFICIAL
2. P-WORLD — 島育ち
   - https://www.p-world.co.jp/machine/database/5027
   - BIG/REG/合算確率、BIG約312枚、REG約14枚、払い出し終了条件を確認。
   - reliability: INDUSTRY_DB_MEDIUM_HIGH
3. K-Navi — 島育ち
   - https://p-kn.com/slot/746/
   - メーカー、完全ノーマルタイプ、設定別BIG/REG/合算、設定別機械割、払い出し終了条件を確認。
   - reliability: ANALYSIS_HIGH
4. パチンコFAN / Pacnk — 機種一覧：2008年度
   - https://pacnk.com/photoslot/mlist_2008.html
   - 2008年1月欄に島育ち（オリンピア）を掲載。
   - reliability: RETROSPECTIVE_DB_MEDIUM
5. 5号機クロニクル — 平和＆オリンピア5号機一覧
   - https://5goki.com/heiwa-olympia
   - 2008年1月、機械割97.1〜110.6%、RT機能付き・BIG最大375枚/REG104枚と掲載。主系列と仕様競合するため競合資料としてのみ保持。
   - reliability: RETROSPECTIVE_DB_MEDIUM / CONFLICT
6. 中一商事 — オリンピア 島育ち中古実機
   - https://www.nakaiti.com/html/toku001.html
   - 型式名島育ち、ノーマルA、BIG/REG/合算確率、BIG約312枚、REG約14枚をP-WORLD系列と独立に再確認。
   - reliability: RETROSPECTIVE_MACHINE_DEALER_MEDIUM

## missingFields

- 具体導入日。
- 50枚あたりゲーム数/ベース。
- 本機固有の設定変更/据え置き/電源OFF→ON挙動。
- 本機固有のガックン・初期出目・ランプ等による変更判別。
- 5号機クロニクル側の異仕様記述の由来・別型式同定。
