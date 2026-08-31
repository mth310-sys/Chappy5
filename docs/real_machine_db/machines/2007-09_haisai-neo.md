# ハイサイネオ

machineName: ハイサイネオ
manufacturer: トロージャン
formalModel: UNVERIFIED
releaseDate: 2007-09
releaseDateConflict: Pachinko Vistaは2007年8月導入開始と記載。P-WORLD、HAZUSE、5号機クロニクルは2007年9月。
generation: 5号機初期
systemType: ノーマル / ボーナス主体 / 準完全告知
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## 性能コア

### 主要ボーナス

initialHitBySetting: UNVERIFIED
payoutRateBySetting: UNVERIFIED
baseGamesPer50: UNVERIFIED
netIncrease: NOT_APPLICABLE

- HAZUSEは2007-09-06作成の当時解析ページで、ボーナス出現率・内部確率・機械割をいずれも「調査中」としている。
- 5号機クロニクルも設定1〜6の機械割を「不明」としている。
- 機種名、メーカー名、BIG/REG、設定別、機械割、1000円、ベース、設定変更、リセット、朝一、据え置き、電源OFF→ON、ガックン、天井など検索語を変更し、P-WORLD、HAZUSE、パチマガスロマガ保存ページ、Pachinko Vista、5号機クロニクル、旧機種DB/回顧資料を横断したが、設定別BIG/REG確率・設定別機械割・50枚ベースの比較可能な数値は今回確定できなかった。

### 基本獲得性能

basicPayout:
- BIG: 345枚を超える払い出しで終了 / 純増約310枚
- REG: 8回入賞または12G消化で終了 / 純増約104枚

- HAZUSE、パチマガスロマガ、Pachinko Vista、P-WORLDの現存情報でBIG約310枚、REG約104枚が一致。
- HAZUSEはBIGを赤7揃い・BAR揃いの2種類、REGを赤7・赤7・ハイビスカス揃いとしている。

### システム

- Pachinko Vistaはトロージャンのパチスロ第4弾かつ同社初の5号機と説明。
- RTなどの付属機能がない準完全告知機。
- ビスカスランプ点灯でボーナス確定。告知はボーナス成立後、毎ゲーム約10%で発生する方式とされる。

## 機種同定・導入時期

- P-WORLD: メーカー「トロージャン」、5号機ノーマル、導入開始2007年09月。
- HAZUSE: トロージャン、5号機、2007年9月。ページ作成日2007-09-06。
- 5号機クロニクル: 導入時期2007/9、メーカー「トロージャン」。
- Pachinko Vista: 広島県公安委員会検定通過状況2007-07-05、トロージャン、2007年8月導入開始と記載。
- 月表記が競合するため平均化せず、3系統が一致する2007-09を本線に置き、2007-08表記を `CONFLICT` として保持する。具体納品日はUNVERIFIED。

## resetBehavior v0.7

resetBehavior:
  settingChangeBehavior: UNVERIFIED
  carryOverBehavior: UNVERIFIED
  powerCycleBehavior: UNVERIFIED
  gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED
  ceilingAfterReset: NONE_CONFIRMED
  modeAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  stateAfterReset: NOT_APPLICABLE / NONE_CONFIRMED
  advantageousSectionReset: NOT_APPLICABLE
  resetBenefits: NONE_CONFIRMED
  resetPenalties: NONE_CONFIRMED
  resetDetection: UNVERIFIED
  numericResetData: NONE_CONFIRMED

### resetBehavior 調査メモ

- 本機はRT/ART/AT非搭載のノーマル機として複数資料が一致するため、RT/ART残G、CZ、モード天井等は `NOT_APPLICABLE / NONE_CONFIRMED`。
- `ハイサイネオ 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井`、トロージャン併記、BIG/REG/準完全告知併記など検索語を変え、P-WORLD、HAZUSE、パチマガスロマガ保存、Pachinko Vista、古いDB/回顧資料を横断した。
- 本機固有の設定変更時処理、据え置き時処理、電源OFF→ONのみの処理、ガックン等の変更判別について直接確認できる高信頼資料は確定できず `UNVERIFIED`。
- 通常時ゲーム数天井、リセット短縮天井、朝一専用モード、設定変更専用恩恵/不利、公開朝一数値は確認できず `NONE_CONFIRMED`。
- 有利区間は世代上 `NOT_APPLICABLE`。

## 欠損 / 競合

missingFields:
- formalModel: UNVERIFIED
- 設定別BIG/REG確率: UNVERIFIED
- 設定別機械割: UNVERIFIED
- 50枚あたりゲーム数: UNVERIFIED
- 具体的な納品開始日: UNVERIFIED
- 本機固有の設定変更/据え置き/電源OFF→ON処理: UNVERIFIED
- 本機固有の変更判別: UNVERIFIED

conflicts:
- 導入月: P-WORLD / HAZUSE / 5号機クロニクルは2007-09、Pachinko Vistaは2007-08。平均・推測せず双方を保持。

## 出典

1. HAZUSE — ハイサイネオ 解析・機種情報
   - https://www.hazuse.com/i/data/haisaineo/top.htm
   - 2007年9月、トロージャン、5号機、BIG/REG構成、BIG約310枚、REG約104枚、当時時点で確率/機械割は調査中
   - confidence: ANALYSIS_HIGH

2. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trojan_slot/02/a.php
   - ノーマル/準完全告知、BIG345枚超・純増約310枚、REG純増約104枚
   - confidence: ANALYSIS_HIGH

3. P-WORLD
   - https://www.p-world.co.jp/machine/database/4852
   - トロージャン、5号機ノーマル、導入開始2007年09月、BIG約310枚、BONUS GAME約104枚
   - confidence: INDUSTRY

4. Pachinko Vista
   - https://www.pachinkovista.com/pfactory/model.php?nid=016706&dsp=0
   - 広島県公安委員会検定通過2007-07-05、2007年8月導入開始表記、同社初5号機、BIG約310枚/REG約104枚
   - confidence: ANALYSIS_HIGH

5. Pachinko Vista — ゲーム性
   - https://www.pachinkovista.com/pfactory/model.php?nid=16706&dsp=1&gc=0
   - RT等の付属機能なし、準完全告知、告知発生率約10%
   - confidence: ANALYSIS_HIGH

6. 5号機クロニクル — その他メーカー
   - https://5goki.com/others
   - ハイサイネオ、導入2007/9、メーカー：トロージャン、機械割不明
   - confidence: ANALYSIS_SINGLE

取得日: 2026-09-01

## 品質判定

- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- performance confidence: ANALYSIS_HIGH for system/basic payout; UNVERIFIED for setting-specific core figures
- release confidence: CONFLICT
- missing values were left unfilled after required re-search; no estimates inserted.
