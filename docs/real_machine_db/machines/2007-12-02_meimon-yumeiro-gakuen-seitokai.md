# 名門!夢色学園生徒会

machineName: 名門!夢色学園生徒会
manufacturer: オーイズミ（オーイズミNEOブランド）
formalType: ユメガク
generation: 5号機
releaseDate: 2007-12-02
systemType: ボーナス + CZ + RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## release / identity

- グリーンべると2007-11-16記事は、オーイズミNEOブランドの新機種として本機を掲載し、型式名を `ユメガク`、納品開始を **2007-12-02** と明記している。
- P-WORLD業界ニュースにも同記事が保存されており、具体日を相互確認できる。
- HAZUSE旧解析は `<2007年11月>` と掲載し、後年整理資料は `2007.12` とするため月表記に差がある。本DBでは具体的な納品開始日を持つ当時業界記事を優先して `2007-12-02` を採用し、月表記差は `CONFLICT_DATE_MONTH` として保持する。

信頼度: INDUSTRY_HIGH（日付・型式） / CONFLICT_DETAIL（月表記）

## payoutRateBySetting

- `名門!夢色学園生徒会 / 夢色学園生徒会 / ユメガク / オーイズミ / オーイズミNEO / 機械割 / 出玉率 / 設定1 / 設定6` を組み替え、当時業界記事、P-WORLD、旧解析、後年DBを横断した。
- 現存する高信頼資料から設定別機械割を確定できなかった。後年整理ページにも出玉率欄は存在するが数値が空欄であり、推測補完しない。

status: `UNVERIFIED_AFTER_RESEARCH`

## initialHitBySetting

P-WORLDおよび後年整理資料で一致:

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/390 | 1/780 | 1/260 |
| 2 | 1/372 | 1/745 | 1/248 |
| 3 | 1/356 | 1/712 | 1/237 |
| 4 | 1/341 | 1/683 | 1/228 |
| 5 | 1/328 | 1/655 | 1/218 |
| 6 | 1/315 | 1/630 | 1/210 |

- BIGは2種類、REGも2種類だが、本物差しでは比較用の合算BIG/REGを記録する。

信頼度: INDUSTRY_DB / SECONDARY_CORROBORATED

## baseGamesPer50

- `50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` を機種名・型式名・メーカー名と組み替え、P-WORLD、当時/旧解析、後年資料を再探索した。
- 比較可能な直接数値を確定できなかった。

status: `UNVERIFIED_AFTER_RESEARCH`

## netIncrease

- 全ボーナス後にチャンスゾーンへ移行。
- CZ中に特殊リプレイ `リプ・ベル・ベル` 成立で60GのRT `ストーリーモード` へ突入。
- 当時業界記事のRT純増は約 `+0.7枚/G`。
- RT中のボーナス成立期待度は20〜25%。RT終了後にボーナス非成立なら再びCZへ入り、CZ↔RTは約50%でループすると説明されている。
- HAZUSE旧解析には特定条件から最大1000G継続のプレミアムRTも記載されているが、突入条件は当時ページ自体が「調査中」。物差し用途で不明な内部抽選は補完しない。

信頼度: INDUSTRY_HIGH / ANALYSIS_ARCHIVE

## basicPayout

- BIG: 351枚超の払い出しで終了、純増平均約237枚。
- REG: 144枚超の払い出しで終了、純増平均約102枚。
- 当時グリーンべると記事とP-WORLD機種DBで一致。

信頼度: INDUSTRY_HIGH / INDUSTRY_DB

## modeSpecificMinimumData

- 5号機ボーナス + CZ + RT。
- 全ボーナス後にCZ。
- CZから特殊リプレイ成立で60G RT `ストーリーモード`。
- RT純増約+0.7枚/G。
- 通常時ゲーム数天井、ART/AT、有利区間は確認対象外/非該当。

## resetBehavior

### settingChangeBehavior

- 設定変更時に通常/CZ/ストーリーモード/プレミアムRTのどの状態から開始するか、RT残Gをどう扱うかを本機固有に明記する直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- `名門!夢色学園生徒会 / 夢色学園 / ユメガク / オーイズミ / 設定変更 / リセット / 朝一 / ストーリーモード / CZ` を組み替えて再探索済み。

### carryOverBehavior

- 据え置き時のCZ/RT残G・内部RT状態の引継ぎを直接示す資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみの場合のCZ/RT残G・内部状態・液晶/ランプ表示の扱いは `UNVERIFIED_AFTER_RESEARCH`。
- `電源OFF ON / 電断 / 再起動 / 据え置き` を型式名・機種名と組み替えて再探索済み。

### gameCounterReset

- 通常時のハマリゲーム数天井は `NONE_CONFIRMED`。
- 60Gおよび最大1000GはRT継続ゲーム数であり、通常時天井ゲーム数ではない。

### ceilingAfterReset

- 設定変更時の短縮天井、朝一専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時の公開モード再抽選・振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- 設定変更/据え置き/電源OFF→ON時のCZ・60G RT・プレミアムRT状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度導入前）。

### resetBenefits

- 設定変更/朝一固有のRT直行、CZ優遇、天井短縮等の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更/朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ等を利用した設定変更/据え置き判別は、`ガックン / 朝一 / 変更判別 / 据え置き判別` まで再探索しても直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時専用のモード振り分け、朝一当選率、短縮天井などの公開数値は `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. グリーンべると — 平和、権利モノ名機『バレリーナ』復活
   - https://web-greenbelt.jp/00004412/
   - 2007-11-16記事。オーイズミNEOブランド、型式ユメガク、12/2納品開始、BIG/REG平均純増、全ボーナス後CZ、60G完走型RT、+0.7枚/G、CZ↔RT約50%。
   - reliability: INDUSTRY_HIGH
2. P-WORLD業界ニュース — 同グリーンべると記事保存
   - https://news.p-world.co.jp/articles/2489/greenbelt
   - 12/2納品開始、型式、RT/ボーナス性能の相互確認。
   - reliability: INDUSTRY_ARCHIVE
3. P-WORLD — 名門!夢色学園生徒会
   - https://www.p-world.co.jp/machine/database/4992
   - 設定別BIG/REG/合算、BIG/REG払い出し終了条件・平均純増、型式ユメガク。
   - reliability: INDUSTRY_DB
4. HAZUSE旧解析 — 名門!夢色学園生徒会
   - https://hazuse.com/i/data/yumeirogakuen/top.html
   - オーイズミ、5号機、CZ/60G RT、最大1000GプレミアムRT。掲載月は2007年11月。
   - reliability: ANALYSIS_ARCHIVE
5. pachinko’s blog — オーイズミネオ「名門！夢色学園生徒会」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/12/meimon-yumeiro-gakuen-seitokai
   - 2007.12、設定別BIG/REG/合算をP-WORLD値と照合。出玉率欄は数値空欄。
   - reliability: SECONDARY_SINGLE

## missingFields

- 設定別機械割/出玉率
- 比較可能な50枚あたりゲーム数
- 設定変更/据え置き/電源OFF→ON時のCZ・RT残G/内部状態処理
- 本機固有の変更判別要素
- 公開朝一専用数値

## conflicts

- 導入時期: 当時グリーンべるとは2007-12-02納品開始、HAZUSE旧解析は `<2007年11月>`、後年整理は `2007.12`。具体日を持つ当時業界記事を優先し12/2採用し、月表記差を保持。
- RT終了条件の説明: グリーンべるとは「60ゲームの完走型RT」と説明する一方、HAZUSE旧解析は終了条件に「ボーナス当選 / 60ゲーム消化」と記載。物差しの確定値は60G・約+0.7枚/Gに限定し、終了細則は `CONFLICT_DETAIL` として平均/推測しない。
