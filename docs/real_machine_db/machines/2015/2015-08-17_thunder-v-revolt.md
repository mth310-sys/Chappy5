# サンダーVリボルト

machineName: サンダーVリボルト
manufacturer: アクロス
releaseDate: 2015-08-17
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: ユニバ公式ブログが2015-08-16時点で「明日8月17日（月）全国導入開始」と明記。グリーンべるとは納品2015-08-16予定、K-Navi/HAZUSEはホール導入開始2015-08-17としており、納品日と実導入日を分離してcanonicalを08-17とする。
generation: 5号機
systemType: ノーマル / 技術介入Aタイプ
formalModelName: サンダーVリボルトUR
inspectionNumber: 5S0424
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **アクロス**。
- canonical導入日: **2015-08-17**。
- 型式名: **サンダーVリボルトUR**。
- 検定番号: **5S0424**。
- ユニバーサル公式製品一覧でも2015年8月発売を確認。
- confidence: OFFICIAL_INDUSTRY_HIGH_MULTI_SOURCE

## payoutRateBySetting

通常掲載機械割:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 99.7% |
| 3 | 101.9% |
| 4 | 106.3% |
| 5 | 108.8% |
| 6 | 111.2% |

完全攻略時:

| 設定 | 完全攻略機械割 |
|---:|---:|
| 1 | 99.1% |
| 2 | 101.4% |
| 3 | 103.7% |
| 4 | 106.3% |
| 5 | 108.8% |
| 6 | 111.2% |

- 通常掲載値と完全攻略値は定義を分離して保持する。
- 完全攻略の定義は、小役完全奪取・ボーナス最速入賞・BIG333枚/REG111枚獲得を含む解析条件。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

ボーナス確率:

| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/277.7 | 1/420.1 | 1/167.2 |
| 2 | 1/270.8 | 1/381.0 | 1/158.3 |
| 3 | 1/264.3 | 1/348.6 | 1/150.3 |
| 4 | 1/258.0 | 1/321.3 | 1/143.1 |
| 5 | 1/252.1 | 1/292.6 | 1/135.4 |
| 6 | 1/248.2 | 1/264.3 | 1/128.0 |

- HAZUSE、一撃、複数解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約34G/50枚**。
- 当時/後年解析を表記揺れ「サンダーVリボルト / サンダーV REBOLT / リボルト」「50枚 / 1000円 / ベース / コイン持ち」で再探索。比較可能な直接値を確認できた資料は限定的なため単一解析値として保持する。
- confidence: ANALYSIS_SINGLE

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART/RTによる純増を性能コアとして持たない。

## basicPayout

- BIG: **最大333枚**。
- REG: **最大111枚**。
- 一撃はBIG「342枚を超える払い出しで終了」、REG「129枚を超える払い出しで終了」とし、技術介入時の実獲得最大333枚/111枚を明記。
- K-NaviでもREG最大111枚を照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ。
- **天井非搭載**。
- AT / ART / CZ / 規定G解除モードなし。
- 有利区間制度導入前。
- 技術介入機のため通常掲載機械割と完全攻略機械割を別定義で保持。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_UNVERIFIED_MACHINE_SPECIFIC_RESET_CONTRACT
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機は天井・規定Gモード・AT/ART/CZ・朝一専用内部モードを持たないノーマルタイプのため、それらに対する「設定変更時リセット」は `NOT_APPLICABLE`。
- 2015-08-04更新の一撃「天井/設定変更」では、本機固有の **設定変更時詳細を『現在調査中』** としている。
- リール初動、表示、ボーナス履歴等の本機固有設定変更契約を、同筐体の別アクロス機から流用しない。
- machine-specific setting-change behavior beyond non-applicable gameplay counters: `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井G、解除モード、高確状態、AT/ART/CZ進捗は存在しないため、朝一の主要出玉契約として引き継ぐ対象は `NOT_APPLICABLE`。
- 設定変更なし据え置き時の本機固有リール初動/表示/履歴表示の契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 2015-08-04更新の一撃では **「電源OFF/ON: 現在調査中」**。
- 「サンダーVリボルト / サンダーV REBOLT / 型式UR / アクロス」+「電源OFF ON / 電断 / 据え置き / 朝一 / 設定変更」を組み替えて再探索したが、正常な営業日跨ぎ純電断のみの本機固有挙動を安全に固定できる直接資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と純電断を同義扱いしない。

### gameCounterReset

- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。
- 天井/規定ゲーム数解除を搭載しないため、前日ハマリGのリセット/引継ぎで朝一期待値が変わる構造はない。

### ceilingAfterReset

- `NOT_APPLICABLE_CEILING_NOT_EQUIPPED`。
- 通常時天井なし、設定変更時短縮天井なし。

### modeAfterReset

- `NOT_APPLICABLE_NO_GAME_COUNT_MODE`。
- 朝一専用の解除モード/天国モード等は確認対象構造として非該当。

### stateAfterReset

- `NOT_APPLICABLE_NO_PUBLIC_AT_ART_CZ_INTERNAL_STATE_CONTRACT`。
- 朝一客行動/ホール収益へ影響する高確・低確等の公開状態契約は確認できない。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時の短縮天井、モード優遇、CZ優遇等: `NOT_APPLICABLE`。
- その他の本機固有朝一恩恵: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更によって失われる天井進捗/モード進捗: `NOT_APPLICABLE`。
- その他の本機固有設定変更不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、初期出目、ランプ/表示による設定変更・据え置き確定/推測契約は、機種名・型式・メーカー・シリーズ名と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を組み替えて再探索したが、直接資料を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- アクロス他機種のガックン知識は本機へ自動転記しない。

### numericResetData

- `NONE_APPLICABLE_OR_CONFIRMED`。
- 短縮天井、リセットモード振り分け、朝一特定G以内当選率など比較可能な設定変更専用公開数値は非該当/未確認。

## conflicts

- `NONE_MATERIAL_CONFIRMED`。
- 導入日についてはグリーンべるとの **2015-08-16納品予定** とユニバ公式/K-Navi/HAZUSEの **2015-08-17全国導入開始**を工程差として分離し、実導入日の競合とは扱わない。
- 通常掲載機械割と完全攻略機械割は攻略条件差でありCONFLICTではなく別定義。

## missingFields

- 設定変更時の本機固有リール初動/表示等: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON時の本機固有挙動: `UNVERIFIED_AFTER_RESEARCH`（当時一撃も調査中）。
- 本機固有ガックン/朝一変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- baseGamesPer50の複数独立ソース照合: `PENDING_QA`（約34GはANALYSIS_SINGLEとして採用）。

## sources

取得日: 2026-09-07

1. ユニバーサル公式製品一覧 2015年 — https://www.universal-777.com/product/slot/2015/
   - 「サンダーVリボルト」発売年月2015年8月を確認。
2. ユニバ公式「ユニバフリーク」2015-08-16 — https://ameblo.jp/aruzefreaks/entry-12058430498.html
   - 2015-08-17（月）全国導入開始を公式当時告知として確認。
3. グリーンべると 2015-07-27 — https://web-greenbelt.jp/00007962/
   - アクロス「A PROJECT」第4弾、ボーナス主体・技術介入、納品2015-08-16予定を確認。
4. HAZUSE「サンダーVリボルト」 — https://hazuse.com/machine/pachislot/5S0424/
   - 型式サンダーVリボルトUR、検定5S0424、導入開始2015-08-17、設定別BIG/REG/合算を確認。
5. 一撃「サンダーVリボルト」 — https://1geki.jp/slot/thundervrevolt/
   - 通常掲載機械割、ボーナス合算、基本ボーナス仕様を照合。
6. 一撃「天井/設定変更」 — https://1geki.jp/slot/thundervrevolt/3/
   - 天井非搭載、設定変更時詳細/電源OFF ONが当時「現在調査中」であることを確認。
7. ちょんぼりすた「サンダーVリボルト」 — https://chonborista.com/slot/universal-slot/10786/
   - BIG/REG/合算、通常機械割と完全攻略機械割、完全攻略条件、最大333枚/111枚を照合。
8. K-Navi「サンダーVリボルト」 — https://p-kn.com/slot/2323/
   - ホール導入開始2015-08-17、ノーマルタイプを確認。
9. K-Navi「REG中の技術介入手順」 — https://p-kn.com/slot/2323/55251/
   - REG最大111枚を照合。
10. 元プロMGのパチスロブログ「アクロスA PROJECTシリーズ」 — https://www.pachislotblog.tokyo/across-series-setteihanbetsu/
   - 50枚あたり約34G、設定別BIG/REG/合算を照合。baseGamesPer50は単一解析値扱い。

## researchNotes

- resetBehavior欠損は「サンダーVリボルト / サンダーV REBOLT / サンダーVリボルトUR / アクロス / A PROJECT」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / ガックン」で再探索。
- 一撃の当時専用ページが設定変更/純電断を「調査中」と明示しており、その後も本機固有の直接契約を固定できなかったため、推測せず `UNVERIFIED_AFTER_RESEARCH` とした。
- 他のアクロス筐体・HANABI・バーサス等の設定変更判別仕様は本機固有根拠なしに流用しない。
