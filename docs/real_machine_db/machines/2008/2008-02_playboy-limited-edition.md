# パチスロ「PLAYBOY」Limited Edition

machineName: パチスロ「PLAYBOY」Limited Edition
manufacturer: 山佐
modelName: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2008-02
generation: 5号機初期
systemType: Aタイプ / ボーナス主体 + ボーナス後20G RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## payoutRateBySetting
|設定|機械割|
|---:|---:|
|1|96.9%|
|2|99.1%|
|3|101.5%|
|4|103.5%|
|5|106.1%|
|6|112.0%|

reliability: ANALYSIS_HIGH

- 当時HAZUSEの設定別表を採用。
- 今回の探索では独立した第二系列の設定別機械割表を十分な精度で確定できなかったため、単一解析系列として保持する。

## initialHitBySetting
|設定|ボーナス合成|
|---:|---:|
|1|1/219.1|
|2|1/209.3|
|3|1/197.9|
|4|1/189.9|
|5|1/179.5|
|6|1/162.2|

reliability: ANALYSIS_HIGH

- BIG/REG個別の設定別確率は今回確定できず、合成のみ採用。

## baseGamesPer50
UNVERIFIED_AFTER_RESEARCH

- 山佐公式は前作からベル払い出し枚数・出現率を改良し「ベースアップ」と明記。
- HAZUSEも「コイン持ちが良くなった」とするが、比較可能な50枚/1000円あたりの具体ゲーム数は確定できなかったため数値化しない。

## netIncrease
- ボーナス後RT: 20G
- RT純増: 約+0.7枚/G

reliability: ANALYSIS_SINGLE

- HAZUSEで20G継続、パチスロ救急車でRT純増約+0.7枚/Gを確認。

## basicPayout
- BIG: 純増約304枚（344枚超払い出しで終了）
- REG: 純増約199枚（224枚超払い出しで終了）

reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- ボーナスは2種類のBIGと2種類のREG、計4種類。
- BIG/REG終了後は20G RTへ突入。
- RTは20G消化またはボーナス成立で終了。
- 通常時はボーナス主体。ゲーム数天井は確認されていない。
- 山佐公式は前作比でRB獲得枚数、ベル性能、ブドウ出現率/期待度、違和感演出などを強化した後継機と説明。

## resetBehavior
settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時の内部状態・20G RT残G処理を本機固有に明記した直接資料を確定できず。
carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時のRT状態/残Gの扱いを本機固有に明記した資料は未確定。
powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ON単独時のRT状態/残G処理を設定変更と分離して明記した直接資料は未確定。
gameCounterReset: `NOT_APPLICABLE_TO_CEILING` — 通常時ゲーム数天井なし。RTはボーナス後20Gの規定ゲーム数型。
ceilingAfterReset: `NONE_CONFIRMED` — 通常時天井および設定変更専用の短縮天井は確認されず。
modeAfterReset: `NONE_CONFIRMED` — 朝一専用モード・リセット専用モードは確認されず。
stateAfterReset: `UNVERIFIED_AFTER_RESEARCH` — RT中に設定変更/電断した場合の状態・残Gを直接明記した資料は未確定。
advantageousSectionReset: `NOT_APPLICABLE` — 有利区間導入前の5号機。
resetBenefits: `NONE_CONFIRMED` — 朝一/設定変更時の専用恩恵や公開数値は確認されず。
resetPenalties: `NONE_CONFIRMED`
resetDetection: `UNVERIFIED_AFTER_RESEARCH` — 本機固有のガックン、初期出目、表示等による設定変更判別は直接資料を確定できず。
numericResetData:
- 通常時ゲーム数天井: なし
- ボーナス後RT: 20G
- 設定変更/朝一専用短縮天井: NONE_CONFIRMED

### resetBehavior探索メモ
`PLAYBOY Limited Edition / パチスロPLAYBOY Limited Edition / プレイボーイLE / 山佐` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / RT / ガックン / 初期出目` を組み替え、山佐公式、当時HAZUSE、旧攻略DB、回顧系資料を横断した。

通常時天井なし、ボーナス後20G RTまでは確認できた。一方、設定変更・据え置き・電源OFF→ON時のRT状態/残G、本機固有の変更判別は直接根拠を確定できなかったため推測しない。

## releaseTiming
- 山佐公式: 稼働時期 `2008年2月`。
- HAZUSE: `<2008年2月>`。
- 今回、信頼できる具体ホール導入日を確定できなかったため、releaseDateは月精度 `2008-02` とする。

## sources
取得日: 2026-09-01
1. 山佐ネクスト公式「パチスロ『PLAYBOY』Limited Edition」 — https://yamasa-next.co.jp/model_plbl/ — メーカー、5号機、Aタイプ、2008年2月稼働、前作比のベースアップ、機種概要 — reliability: OFFICIAL
2. HAZUSE「パチスロ『PLAYBOY』Limited Edition～解析・機種情報」 — https://hazuse.com/i/data/patisuro_playboy_limitedededition/top.htm — 2008年2月、設定1〜6、合成確率、機械割、BIG/REG獲得、20G RT — reliability: ANALYSIS_HIGH
3. パチスロ救急車「パチスロPLAYBOY Limited Edition完全攻略解析情報」 — https://www.eightbeat.com/slot99/kishu/ha_gyou/hu/playboyLE/page_menu.html — 2008.02、天井なし、ゲーム数終了型RT、RT純増約+0.7枚/G — reliability: ANALYSIS_SINGLE

## missingFields
- 型式名の信頼できる直接資料
- 具体ホール導入日
- BIG/REG個別の設定別確率
- 比較可能な50枚あたりゲーム数
- 設定変更時のRT状態/残G処理
- 据え置き時のRT状態/残G処理
- 電源OFF→ON単独時のRT状態/残G処理
- 本機固有のガックン/初期出目等による変更判別

## conflicts
- NONE_CONFIRMED
