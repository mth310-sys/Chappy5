# パチスロシティーハンター

machineName: パチスロシティーハンター
manufacturer: 銀座
generation: 5号機
releaseDate: 2007-12-06
systemType: ボーナス + RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## release / identity

- 銀座が2007-11-05に発表。
- グリーンべると2007-11-09記事は「納品は12月6日からスタートする予定」と明記しているため、本DBでは `2007-12-06` をホール導入基準日として採用する。
- P-WORLDおよび5号機クロニクルは導入を `2007年11月` と掲載するため月表記に差がある。具体日を持つ当時業界記事を優先し、月表記差は `CONFLICT_DATE_MONTH` として保持する。
- P-WORLDではメーカーを銀座、5号機RT機として掲載。
- 型式名/検定番号は、機種名・銀座・GINZA・検定・型式を組み替えて再探索したが今回確定できず `UNVERIFIED_AFTER_RESEARCH`。

信頼度: INDUSTRY_HIGH（日付） / CONFLICT_DETAIL（月表記）

## payoutRateBySetting

5号機クロニクル:

| 設定 | 機械割 |
|---|---:|
| 1 | 98.0% |
| 2 | 99.1% |
| 3 | 100.8% |
| 4 | 103.3% |
| 5 | 105.1% |
| 6 | 109.6% |

後年のシリーズ整理資料も設定1/2/3/5/6は同値、設定4のみ `103.6%` とするため、設定4は `103.3% / 103.6% CONFLICT_DETAIL` として平均せず保持する。

信頼度: ANALYSIS_SINGLE / CONFLICT_DETAIL（設定4）

## initialHitBySetting

- K-Navi現存ページは設定1〜6のBIG/REGを「未発表」としており、設定別ボーナス確率表を掲載していない。
- `パチスロシティーハンター / シティーハンター / 銀座 / GINZA / 2007 / BIG / REG / 合算 / 設定1 / 設定6` 等で当時解析・旧DB・回顧資料を再探索したが、兄弟機や2014年オリンピア版ではない2007年銀座版の設定別ボーナス確率を高信頼に確定できなかった。
- 後継2014年版のボーナス/AT確率は別機種のため流用しない。

status: `UNVERIFIED_AFTER_RESEARCH`

## baseGamesPer50

- パチマガスロマガFREEの後年回顧は「5号機初期の1台だけにコインもちは1000円あたり50G超」と明記。
- 比較用の精密設定別値または単一精密値は、`1000円 / 50枚 / ベース / コイン持ち` を組み替えて再探索しても今回確定できず。

recordedValue: `50G超 / 1000円`（定性的下限のみ）
status: `PARTIAL_NUMERIC`
信頼度: ANALYSIS_HIGH（50G超）

## netIncrease

- REG終了後に100G RT `XYZタイム` へ突入。
- RTは100G消化またはボーナス成立で終了。
- RT純増は約 `+0.9枚/G`。
- 完走時は約90枚増が目安。
- グリーンべると当時記事、K-Navi、パチマガスロマガFREEで一致。

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## basicPayout

- ボーナスはBIG3種類 + REG。
- 同色系BIG: 純増約380枚。
- 異色系BIG: 純増約300枚。
- REG: 純増約96枚。
- K-Navi配当表はBIGの一部を466枚超払い出し終了、別BIGを361枚超払い出し終了、REGを12Gまたは8回入賞終了と掲載。

信頼度: INDUSTRY_HIGH

## modeSpecificMinimumData

- 5号機ボーナス + RT。
- REG後のみ100G RT `XYZタイム`。
- RT純増約+0.9枚/G。
- 通常時ゲーム数天井、ART/AT、通常時モード管理を示す高信頼資料は今回確認できず。
- 有利区間制度導入前。

## resetBehavior

### settingChangeBehavior

- 設定変更時の通常状態、REG後100G RT残G、成立済みボーナス、リール初期挙動を本機固有に明記する直接資料は `UNVERIFIED_AFTER_RESEARCH`。
- `パチスロシティーハンター / シティーハンター / 銀座 / GINZA / 設定変更 / リセット / 朝一 / ガックン / XYZタイム / RT` を組み替えて再探索済み。

### carryOverBehavior

- 据え置き時のXYZタイム残G・内部RT状態を明示した直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみの場合のXYZタイム残G・内部状態・表示の扱いは `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常時ゲーム数天井は `NONE_CONFIRMED`。
- 100GはREG後RTの固定継続G数であり、通常時ハマリ天井ではない。

### ceilingAfterReset

- リセット短縮天井、設定変更後専用天井は `NONE_CONFIRMED`。

### modeAfterReset

- 朝一専用モード、設定変更時モード再抽選、公開モード振り分けは `NONE_CONFIRMED`。

### stateAfterReset

- XYZタイム中に設定変更/据え置き/電源OFF→ONした際の残G・内部RT状態処理は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE`（有利区間制度前）。

### resetBenefits

- 設定変更・朝一固有のRT直行、天井短縮、特定モード移行等の公開恩恵は `NONE_CONFIRMED`。

### resetPenalties

- 設定変更・朝一固有の公開不利要素は `NONE_CONFIRMED`。

### resetDetection

- 本機固有のガックン、初期出目、液晶/ランプ状態等を利用した設定変更・据え置き判別は、検索語と資料系統を変えても直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時専用の公開朝一数値は今回確認できず。

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース — 銀座からパチスロ「シティーハンター」登場
   - https://news.p-world.co.jp/articles/2462/greenbelt
   - 2007-11-09記事。12/6納品開始予定、BIG約380/300枚、REG約96枚、REG後100G RT、RT純増約+0.9枚/G。
   - reliability: INDUSTRY_HIGH
2. K-Navi — パチスロ シティーハンター（銀座）
   - https://p-kn.com/slot/731/
   - BIG/REG/機械割の当時公開欄は未発表。REG後100G RT、+0.9枚/G、ボーナス構成・払出条件。
   - reliability: ANALYSIS_ARCHIVE
3. P-WORLD — パチスロシティーハンター「2007年」
   - https://www.p-world.co.jp/machine/database/4968
   - メーカー銀座、5号機RT、導入開始2007年11月表記。
   - reliability: INDUSTRY_DB
4. 5号機クロニクル — 銀座5号機全機種一覧
   - https://5goki.com/ginza
   - 設定別機械割98.0/99.1/100.8/103.3/105.1/109.6%、導入2007/11表記。
   - reliability: ANALYSIS_SINGLE
5. パチマガスロマガFREE — 名機 the ORIGIN / シティーハンター
   - https://pachimaga.com/free/special/3d1fe8397fe97c6e9535711f15203ead5a89d40a.php
   - 1000円あたり50G超、REG後100G XYZタイム、+0.9枚/Gを回顧。
   - reliability: ANALYSIS_HIGH
6. シティーハンターシリーズ機械割整理
   - https://www.marimo0925.net/pachislot-kikaiwari-cityhunter-ban/
   - 2007年銀座版の機械割。設定4のみ103.6%で5号機クロニクル103.3%と差。
   - reliability: SECONDARY_SINGLE

## missingFields

- 2007年銀座版の正式型式名/検定番号
- 設定別BIG/REG/ボーナス合算確率
- 精密な50枚あたりゲーム数（設定別または比較可能な単一値）
- 設定変更/据え置き/電断時のXYZタイム残G・内部状態処理
- 本機固有の設定変更判別要素
- 公開朝一専用数値

## conflicts

- 導入時期: 当時グリーンべると記事は2007-12-06納品開始予定、P-WORLD/5号機クロニクルは2007年11月表記。具体日の当時業界記事を優先し12/6採用、月表記差は保持。
- 設定4機械割: 5号機クロニクル `103.3%`、後年シリーズ整理 `103.6%`。平均せず双方保持。
