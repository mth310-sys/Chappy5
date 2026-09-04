# サンダーVスペシャル

machineName: サンダーVスペシャル
manufacturer: エレコ / アルゼ販売
releaseDate: 2006-11
generation: 5号機初期
systemType: ノーマル/ボーナス主体 + ハマリ救済RT
coreStatus: PARTIAL
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH

## payoutRateBySetting

設定は1・4・6の3段階。

| 設定 | 機械割 |
|---|---:|
| 1 | 98.9% |
| 4 | 102.1% |
| 6 | 107.2% |

K-Navi値。pacnkでは98.9/102.1/107.1%、別回顧資料では98.8/101.9/106.7%、個人整理では98.38/101.37/106.06%と差があるため、精密値はCONFLICTとして保持し、物差し集計では同一定義確認後に使用する。

reliability: CONFLICT / ANALYSIS_HIGH

## initialHitBySetting

### BIG
| 設定 | BIG |
|---|---:|
| 1 | 1/297.9前後 |
| 4 | 1/287.4前後 |
| 6 | 1/270.8前後 |

### MB/CT
| 設定 | MB/CT |
|---|---:|
| 1 | 1/910.2前後 |
| 4 | 1/780.2前後 |
| 6 | 1/655.4前後 |

### ボーナス合算
| 設定 | 合算 |
|---|---:|
| 1 | 約1/224 |
| 4 | 約1/210 |
| 6 | 約1/192 |

複数資料で丸め差の範囲で一致。
reliability: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED。

「サンダーVスペシャル 50枚/1000円/ベース/コイン持ち」で再探索したが、今回比較可能な通常時ベースを確定できず。

## netIncrease

通常時のAT/ART純増は該当なし。

ハマリ救済RTは後年詳細資料で約+0.4枚/Gとされるが、物差しの主性能では補助扱い。

## basicPayout

- BIG: 最大/純増約336枚（回顧資料）
- MB（2種BB）: 純増最大約238枚

別資料にBIG 345枚超払い出し終了・純増約335枚という表現があるため、終了条件と実獲得値を区別する。

## modeSpecificMinimumData

- 型式名: サンダーVスペシャルDX2
- 3段階設定（1・4・6）
- ボーナス間1000G超で次回ボーナスまでハマリ救済RT
- 5号機初期のノーマル系

## resetBehavior — v0.7

settingChangeBehavior: **RETAIN_CEILING_COUNTER_CONFIRMED**。既存の同機日付付きレコード `2006-11-27_thunder-v-special.md` と同一機種資料を照合し、設定変更を行っても天井判定用のボーナス間ハマリゲーム数はリセットされず引き継がれる解析情報を反映。

carryOverBehavior: **RETAIN_CEILING_COUNTER_CONFIRMED**。据え置き時はボーナス間ハマリゲーム数を引き継ぎ、前日ハマリ台では宵越し天井狙いが成立しうる。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ONのみの天井進捗・RT状態の扱いは、検索語・資料系統を変えても高信頼な本機固有資料で確定できず。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE_CONFIRMED**。設定変更時も天井用内部ハマリゲーム数を引き継ぐ。ホール表示器側のデータカウンタ表示リセットとは分離して扱う。

ceilingAfterReset: **RETAIN_TO_1000G_CONFIRMED**。通常天井はボーナス間1000G到達（資料に1001G突入表記もあり）。設定変更専用短縮ではなく、前日からの累計進捗を引き継ぐ解析情報。

modeAfterReset: **NOT_APPLICABLE_OR_UNVERIFIED**。長期ゲーム数モードを持つ機種としての公開リセット専用モード情報は確認できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。天井ゲーム数引継ぎ以外のRT状態・内部フラグ等の設定変更時処理は直接根拠未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機初期。

resetBenefits: **CONFIRMED_CEILING_PROGRESS_RETAINED**。設定変更でも天井進捗が消えないため、前日ハマリ台は宵越し対象になりうる。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。公開された設定変更固有の主要不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン・初期出目・液晶/ランプ等による本機固有の変更判別は確証未取得。

numericResetData:
- 天井: **ボーナス間1000G**（別資料に1001G突入表記あり）
- 設定変更後: **前日ハマリゲーム数引継ぎ**
- 天井RT: **次回ボーナスまで / 約+0.4枚/G**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **HIGH for setting-change ceiling-counter retention; PARTIAL for power-cycle/state/detection**。

## duplicatePathQaNote

- repoには同一機種の `2006-11-27_thunder-v-special.md` も存在し、そちらには先行してv0.7 resetBehaviorが収録されていた。
- 「既存全レコードを順次遡及」の条件上、月キー版を未QAのまま飛ばさず、本レコードにも同一機種・同一資料根拠のresetBehaviorを整合反映した。
- 重複レコード自体の削除・統合は今回行わない。性能値の競合も既存どおり保持する。

## sources

初回取得日: 2026-08-31 / resetBehavior QA整合日: 2026-09-04

1. ユニバーサルエンターテインメント公式 — サンダーVスペシャル
   - https://www.universal-777.com/product/slot/thunder_v_sp/
   - 製品存在・シリーズ/ゲーム性
   - reliability: OFFICIAL
2. K-Navi — サンダーVスペシャル
   - https://p-kn.com/slot/685/
   - BIG/MB(表記REG)・合算・機械割
   - reliability: ANALYSIS_HIGH
3. pacnk — サンダーVスペシャル設定判別
   - https://pacnk.com/slot/tools/sh_savsp.html
   - BIG/CT・PAYOUT・天井1000G・天井RT約+0.4枚/G・設定変更時ハマリG数引継ぎ
   - reliability: ANALYSIS_HIGH
4. パチ7 — サンダーVの歴史
   - https://pachiseven.jp/articles/detail/10861
   - 2006年11月、BIG最大336枚、MB最大238枚、1000G救済RT
   - reliability: ANALYSIS_HIGH
5. DMMぱちタウン 名波誠
   - https://p-town.dmm.com/writers/nanami/13175
   - 2006年11月、設定1/4/6、合算値
   - reliability: ANALYSIS_HIGH
6. みんスロ — サンダーVスペシャル
   - https://minslo.com/%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BCv%E3%82%B9%E3%83%9A%E3%82%B7%E3%83%A3%E3%83%AB/
   - 導入日・天井/RT・別系統の機械割値
   - reliability: ANALYSIS_SINGLE
7. 後年個人解析 — リーチ目集〈サンダーVスペシャル〉
   - https://ameblo.jp/thundervsp5/entry-12948934275.html
   - 天井1001G表記・設定変更後もハマリG引継ぎ補助照合
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / 通常時ベース
- 機械割の精密値の一次資料照合
- powerCycleBehavior（設定変更を伴わない電源OFF→ONのみ）
- stateAfterResetの天井以外の固有挙動
- resetDetection（ガックン等の機種固有確証）

## conflicts

- 機械割: K-Navi/pacnk/回顧・個人整理で小幅差。平均せず各値を保持。
- CT確率: 設定4・6で資料間に小差あり。平均化しない。
- 天井表現: 「1000Gで発動」と「1001Gで突入」が併存。到達/突入ゲーム表現差の可能性はあるが推測で統一せず保持。
