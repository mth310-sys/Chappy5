# パチスロ「機動戦士ガンダムII～哀・戦士編～」

machineName: パチスロ「機動戦士ガンダムII～哀・戦士編～」
manufacturer: 山佐
generation: 5号機
releaseDate: 2007-12-03
systemType: ボーナス + 完走型RT
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## release / identity

- 型式名: `機動戦士ガンダム2-C`。
- HAZUSEは導入開始日を `2007-12-03` と掲載。
- グリーンべると2007-11-30記事は「12月3日から稼働が始まる」と明記しており、当時一次時点の業界記事でも日付を照合できる。
- K-Naviの2007-09-15発表会記事も「ホールデビューは12月上旬予定」としており整合。
- P-WORLDはページ下部で導入開始を `2007年11月` とするため月表記に差があるが、具体日を明記した当時業界記事を優先して `2007-12-03` を採用し、P-WORLD月表記は `CONFLICT_DATE_MONTH` として保持する。

信頼度: INDUSTRY_HIGH（日付） / CONFLICT_DETAIL（月表記）

## payoutRateBySetting

HAZUSE:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 99.5% |
| 3 | 101.5% |
| 4 | 104.0% |
| 5 | 107.5% |
| 6 | 111.0% |

P-WORLDもページ概要で `97.5% ～ 111%` と一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

HAZUSE解析値。P-WORLD掲載の青7BIG/赤7BIGも主要値が整合。

| 設定 | 青7BIG | 赤7BIG | BIG合成 | REG | ボーナス合成 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/468.1 | 1/809.1 | 1/296.5 | 1/612.5 | 1/199.8 |
| 2 | 1/464.8 | 1/728.2 | 1/283.7 | 1/580.0 | 1/190.5 |
| 3 | 1/461.5 | 1/642.5 | 1/268.6 | 1/524.3 | 1/177.6 |
| 4 | 1/461.5 | 1/565.0 | 1/254.0 | 1/439.8 | 1/161.0 |
| 5 | 1/461.5 | 1/492.7 | 1/238.3 | 1/374.5 | 1/145.6 |
| 6 | 1/461.5 | 1/425.6 | 1/221.4 | 1/319.7 | 1/130.8 |

※P-WORLDの設定3赤7BIGは `1/642.2`、HAZUSEは `1/642.5`。微差は別系列表記として `CONFLICT_DETAIL` 保持。

信頼度: ANALYSIS_HIGH / CONFLICT_DETAIL（設定3赤7のみ）

## baseGamesPer50

パチマガスロマガ解析値（1000円あたり）:

| 設定 | G/1000円 |
|---|---:|
| 1 | 35.28G |
| 2 | 35.31G |
| 3 | 35.34G |
| 4 | 35.53G |
| 5 | 35.92G |
| 6 | 36.43G |

信頼度: ANALYSIS_HIGH

## netIncrease

- BIG終了後は必ず78Gの完走型RT `Gエピソード` へ突入。
- P-WORLDは1Gあたり約 `+0.3枚`、完走時約23枚増加と掲載。
- HAZUSEも78G RTを確認し、78G消化・ボーナス入賞・特定1枚役入賞で終了。1枚役は目押しで回避可能。
- ループ抽選はない。

信頼度: ANALYSIS_HIGH

## basicPayout

- 青7BIG: 約300枚。
- 赤7BIG: 約180枚。
- REG: 最大82枚。
- HAZUSE配当表では青7BIGは348枚超払い出し終了、赤7BIGは261枚超払い出し終了、REGは116枚超払い出し終了。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナス + 完走型RTタイプ。
- BIG後に必ず78Gの `Gエピソード`。
- 通常時のゲーム数天井、CZ、ART、AT、通常モード管理を示す高信頼資料は今回確認できず。
- 有利区間制度導入前の5号機。

## resetBehavior

### settingChangeBehavior

- 設定変更時の78G RT残G、内部RT状態、成立済みボーナス、リール初期挙動について本機固有の直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- `機動戦士ガンダムII / ガンダム2-C / 山佐` と `設定変更 / リセット / 朝一 / ガックン / RT / 据え置き / 電源` を組み替えて再探索済み。

### carryOverBehavior

- 据え置き時にRT残G・内部RT状態がどう扱われるかを明示した直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみの場合のRT残G・内部RT状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井を確認できず、通常時天井カウンタは `NONE_CONFIRMED`。
- 78GはBIG後RTの固定継続G数であり通常時ハマリ天井ではない。

### ceilingAfterReset

- リセット短縮天井、設定変更後専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時の通常モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- Gエピソード中に設定変更/電断した場合の残状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度前）。

### resetBenefits

- 設定変更・朝一固有の短縮天井、RT直行等の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更・朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶・ランプ・スロットルレバー等を使った設定変更/据え置き判別は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時専用の公開朝一数値は今回確認できず。

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース — 山佐が初のファン向けイベントを開催
   - https://news.p-world.co.jp/articles/2532/greenbelt
   - 2007-11-30記事。「12月3日から稼働が始まる」と明記。
   - reliability: INDUSTRY_HIGH
2. HAZUSE — パチスロ「機動戦士ガンダムⅡ～哀・戦士編～」
   - https://hazuse.com/machine/pachislot/7S0680/
   - 導入2007-12-03、型式、設定別ボーナス確率、機械割、78G RT、配当。
   - reliability: ANALYSIS_HIGH
3. P-WORLD — パチスロ「機動戦士ガンダムII～哀・戦士編～」
   - https://www.p-world.co.jp/machine/database/4934
   - 青/赤BIG、REG枚数、RT +0.3枚/G、78G、機械割レンジ、型式。導入月は2007年11月表記。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/154/c.php
   - 設定1〜6の1000円ベース35.28〜36.43G、小役確率。
   - reliability: ANALYSIS_HIGH
5. K-Navi — 発表記者会見
   - https://p-kn.com/topics/exhibition/186/
   - 2007-09-13発表、ホールデビュー12月上旬予定。
   - reliability: PERIOD_ARCHIVE

## missingFields

- 設定変更時の78G RT残状態処理
- 据え置き時のRT残G/内部状態引継ぎ
- 電源OFF→ON時のRT残G/内部状態引継ぎ
- 本機固有の変更判別要素
- 公開朝一専用数値

## conflicts

- 導入時期: グリーンべると/HAZUSEは2007-12-03、K-Naviは12月上旬予定、P-WORLDページ下部は2007年11月。具体日の当時業界記事を優先して12/3採用し、P-WORLD月表記は資料差として保持。
- 設定3赤7BIG: HAZUSE `1/642.5`、P-WORLD `1/642.2`。平均せず双方保持。
