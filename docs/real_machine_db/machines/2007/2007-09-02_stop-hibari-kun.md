# ストップ!! ひばりくん!

machineName: ストップ!! ひばりくん!
manufacturer: SANKYO
formalModel: ストップ!! ヒバリクン!S
releaseDate: 2007-09-02
generation: 5号機初期
systemType: A+RT / ボーナス+固定G数RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 性能コア

### 設定別ボーナス確率・機械割

| 設定 | BB | RB | ボーナス合算 | 機械割 |
|---:|---:|---:|---:|---:|
| 1 | 1/404 | 1/555 | 1/234 | 96% |
| 2 | 1/374 | 1/516 | 1/217 | 99% |
| 3 | 1/346 | 1/485 | 1/202 | 103% |
| 4 | 1/324 | 1/452 | 1/188 | 106% |

- BB/RB/合算はSANKYOオンライン博物館公式スペックとP-WORLDで一致。
- 機械割は2007-07-27付グリーンべると当時記事が設定1 96%〜設定4 106%を公表し、P-WORLDの全設定 96/99/103/106% と整合。
- 本機は設定1〜4の4段階設定。後年ページに設定5/6を付した別系統データがあるが、SANKYO公式・当時業界記事・P-WORLDと機種構造自体が合わないため、本DBでは採用せず誤混入資料として除外した。
- confidence: OFFICIAL + INDUSTRY

### ベース

baseGamesPer50:
- UNVERIFIED

- `ストップ!!ひばりくん! / ストップ!!ヒバリクン!S / SANKYO` と `50枚 / 1000円 / ベース / コイン持ち / 通常時` を組み替え、メーカー公式、当時業界記事、P-WORLD、旧解析・回顧資料を再探索したが比較可能な公開値を確定できなかった。

### RT / 純増

netIncrease:
- RT「ひばりステージ」: 33G または 77G
- 1Gあたり純増: UNVERIFIED

modeSpecificMinimumData:
- BIG終了後はRT「ひばりステージ」へ突入
- BIG種別/条件により33Gまたは77G

- SANKYO公式オンライン博物館と公式ミニパンフでBIG後33G/77G RTを確認。
- P-WORLDでもBIG終了後RT33Gまたは77Gを確認。
- RT純増/Gは検索語・資料系統を変えて再探索したが高信頼な比較可能値を確定できず `UNVERIFIED`。

### 基本獲得性能

basicPayout:
- BIG: 純増約310枚 / 346枚を超える払い出しで終了
- REG: 純増約100枚 / 12G消化または8回入賞で終了

- 純増約310枚/約100枚は2007-07-27付グリーンべると当時記事。
- BIG 346枚超払い出し終了、REG 12Gまたは8回入賞終了はP-WORLDおよびSANKYO公式ミニパンフで確認。
- confidence: INDUSTRY + OFFICIAL

## 機種同定・導入時期

- SANKYOオンライン博物館は導入年月を `2007.09`、型式を `ストップ!! ヒバリクン!S` と掲載。
- 2007-07-27付グリーンべると記事はSANKYOが2007-07-26に本機を発表し、**納品は2007-09-02から**と明記。
- P-WORLDも導入開始を2007年9月としている。
- 本DBでは具体日を明記した当時業界一次資料を優先し `releaseDate: 2007-09-02` とする。

## resetBehavior v0.7

resetBehavior:
  settingChangeBehavior: UNVERIFIED
  carryOverBehavior: UNVERIFIED
  powerCycleBehavior: UNVERIFIED
  gameCounterReset: NONE_CONFIRMED / RT残G処理はUNVERIFIED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  stateAfterReset: RT中の設定変更・電断・据え置き時状態処理はUNVERIFIED
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED
  numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- `ストップ!!ひばりくん! / ストップ!!ヒバリクン!S / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / RT残り / 天井 / 天井短縮 / モード / ガックン / 変更判別` を組み替えて再探索。
- SANKYO公式オンライン博物館・公式ミニパンフ、2007年当時グリーンべると、P-WORLD、旧掲示板/回顧資料を横断。
- 通常時ゲーム数天井、リセット短縮天井、朝一専用モード、設定変更専用の公開恩恵/不利、公開朝一数値は確認できず `NONE_CONFIRMED`。
- BIG後に33G/77Gの固定RTを持つため、RT中に設定変更・据え置き・電源OFF→ONを行った場合の内部RT状態/残G処理はホール経営上意味があるが、本機固有の直接資料を確定できず `UNVERIFIED`。一般的な5号機挙動から推定しない。
- 本機固有のリールガックン、液晶表示等による変更判別も確定資料を確認できず `UNVERIFIED`。
- 有利区間は世代上 `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- baseGamesPer50: UNVERIFIED
- RT純増/G: UNVERIFIED
- 設定変更時のRT内部状態/残G処理: UNVERIFIED
- 据え置き時のRT内部状態/残G処理: UNVERIFIED
- 電源OFF→ON時のRT内部状態/残G処理: UNVERIFIED
- 本機固有の設定変更判別: UNVERIFIED

conflicts:
- NONE_CONFIRMED

## 出典

1. SANKYOオンライン博物館「ストップ!! ひばりくん!」
   - https://www.sankyo-fever.jp/collection/530/
   - 導入年月2007.09、型式 `ストップ!! ヒバリクン!S`、4段階設定、設定別BB/RB/合算、BIG後33G/77G RT
   - confidence: OFFICIAL

2. SANKYO公式ミニパンフレット
   - https://www.sankyo-fever.jp/assets/images/collection/pamphlet/1121.pdf
   - BIG 346枚超払い出し終了、REG 12Gまたは8回入賞終了、BIG終了後RT33G/77G
   - confidence: OFFICIAL

3. グリーンべると「倖田來未がパチンコに続きパチスロに」(2007-07-27)
   - https://news.p-world.co.jp/articles/2310/greenbelt
   - 型式、純増BIG約310枚/REG約100枚、設定1〜4、BB/RB・機械割レンジ、納品2007-09-02開始
   - confidence: INDUSTRY

4. P-WORLD ストップ!!ひばりくん!
   - https://www.p-world.co.jp/machine/database/4857
   - 設定別BB/RB/合算、機械割96/99/103/106%、BIG/REG終了条件、RT33G/77G、導入2007年9月
   - confidence: INDUSTRY

取得日: 2026-09-01

## 品質判定

- coreStatus: PARTIAL（設定別ボーナス・機械割・獲得性能・RT G数は高信頼で取得済み。50枚ベースとRT純増/Gのみ未確定）
- resetBehaviorQA: PARTIAL
- release confidence: INDUSTRY + OFFICIAL（月）
- setting table: OFFICIAL + INDUSTRY
- payout/RT structure: OFFICIAL + INDUSTRY
- missing reset/base values were left UNVERIFIED only after required term/source-family re-search; no estimated values inserted.
