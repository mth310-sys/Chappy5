# ウルトラキューティーハニー3

machineName: ウルトラキューティーハニー3
commonName: ウルトラキューティーハニー
manufacturer: メーシー
releaseDate: 2008-01 / 2008-02
releaseDatePrecision: CONFLICT_MONTH
modelName: ウルトラキューティーハニー3
approvalNumber: 7S0646
generation: 5号機
systemType: ボーナス+RT / RT延命型（メーカー公式はボーナス+AT表記）
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL
confidence: CORE_HIGH / RESET_LOW / RELEASE_CONFLICT

## identity

- メーカー公式の商品名は「ウルトラキューティーハニー」、メーカーはメーシー、5号機。
- P-WORLD / HAZUSEで型式名 `ウルトラキューティーハニー3`、検定番号 `7S0646` を確認。
- 2007年6月のエレコ「スーパーキューティーハニー」とは別機種。P-WORLD上の類似名称や後年DBの別仕様記述を混同しない。
- 本レコードは正式型式を識別しやすくするため `ウルトラキューティーハニー3` をmachineNameとし、一般商品名「ウルトラキューティーハニー」をcommonNameに保持する。

## releaseDateEvidence

### 2008年1月系列
- ユニバーサルエンターテインメント公式製品ページ: 発売 `2008年1月`。
- ユニバーサル公式製品一覧: 発売年月 `2008年1月`。
- P-WORLD: 導入開始 `2008年01月`。
- 5号機クロニクルも `2008年1月` とするが、同ページはゲーム仕様そのものに別仕様混入が疑われるため補助扱い。

### 2008年2月系列
- グリーンべると 2008-02-01: 同日にアルゼが『ウルトラキューティーハニー』『リーチ目発見!スロガッパ』の発表展示会を開催したと報道。
- K-Navi展示会速報 2008-02-05: 2008-02-01の新機種発表展示会を報道。
- 当時系「パチスロ業界初まとめ」更新履歴: `2008/2/上発売` と記載。
- 後年のユニバーサル系機種年表にも2008年2月表記が存在する。

判定: `CONFLICT_RELEASE_TIMING`
- 公式/P-WORLDの1月と、実際の発表展示会・当時発売履歴の2月上旬が時系列上両立しにくい。
- 「発売年月」と「発表/ホール導入」の定義差だけでは完全に説明できないため平均・推定せず両系列を保持する。

## payoutRateBySetting

パチマガスロマガ / HAZUSE / P-WORLD / K-Naviで一致する主系列:
- 設定1: 98%
- 設定4: 104%
- 設定6: 111%
- 設定H: 117%

注記:
- HAZUSEの表は行ラベルが設定1/4/5/6となっているが、備考に「設定は1、4、6、H」と明記され、数値系列は設定1/4/6/Hに対応。
- 4段階設定。通常の1〜6六段階として補間しない。

reliability: ANALYSIS_HIGH / INDUSTRY_DB_HIGH

## initialHitBySetting

パチマガスロマガ精密値:

### BIG合成
- 設定1: 1/474.90
- 設定4: 1/445.82
- 設定6: 1/420.10
- 設定H: 1/390.10

### HONEY CHANCE / REG
- 設定1: 1/963.76
- 設定4: 1/840.21
- 設定6: 1/744.73
- 設定H: 1/668.73

### ボーナス合成
- 設定1: 1/318.14
- 設定4: 1/291.27
- 設定6: 1/268.59
- 設定H: 1/246.38

照合:
- HAZUSEは丸め値 BIG 1/475→1/390、REG 1/963.8→1/668.7、合成1/318.1→1/246.4で一致。
- P-WORLD / K-Naviは合成 1/318 / 1/291 / 1/269 / 1/246 で一致。

reliability: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ:
- 設定1: 41.46G / 50枚
- 設定4: 41.94G / 50枚
- 設定6: 42.58G / 50枚
- 設定H: 43.60G / 50枚

当時個人記録にも約40〜45G/1000円との記述があり、レンジ整合を確認。

reliability: ANALYSIS_HIGH

## netIncrease

- RT / ART延命区間: 約 `+0.5枚/G`。
- 当時2008-01-11記録と後年シリーズ回顧で一致。
- メーカー公式は「超簡単なART」「ボーナス+AT」と表現する一方、P-WORLD・当時業界記事・解析はRTとして説明する。

判定:
- 物差し分類は `ボーナス+RT / RT延命型` を主とし、メーカー公式の当時商品分類 `ボーナス+AT` を別記する。

## basicPayout

パチマガスロマガ:
- BIG: 459枚を超える払い出しで終了、純増目安 約310枚。
- REG / HONEY CHANCE: 144枚を超える払い出しで終了、純増目安 約101枚。

P-WORLD:
- BIG CHANCE: 459枚を超える払い出しで終了。
- HONEY CHANCE: 144枚を超える払い出しで終了。

K-Navi:
- BIGは459枚超払い出し終了で一致。
- HONEY CHANCEは `114枚を超える払い出しで終了` と掲載し、P-WORLD/パチマガの144枚と競合。

判定:
- 主系列: BIG約310枚 / REG約101枚。
- REG規定払い出しは `144枚超` を複数一致系列として採用しつつ、K-Navi `114枚超` を `CONFLICT_REG_PAYOUT_THRESHOLD` として保持。

## modeSpecificMinimumData

- BIG後にRT「キューティーゲーム」へ突入。
- 赤/青チェリー入賞でRT終了。ナビポイントがあれば対応チェリーをナビして回避し、RTを延命できる。
- ナビポイントは通常時・BIG中のミニゲームで獲得する。
- K-NaviはRT中ボーナス当選時、未使用ナビポイントを次RTへ繰り越すと説明。
- RT純増目安: 約+0.5枚/G。
- RT終了後、通常時を1200G消化すると救済RTへ再突入する「天井RT」仕様が当時解析/回顧資料で確認できる。

### 天井の定義

- `1200G`はボーナス強制当選天井ではなく、RT終了後を起点とするRT再突入の救済ゲーム数として扱う。
- 実機DBのgameCounter/ceiling項目ではこの定義を混同しない。

## v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 「設定変更 / リセット / RAMクリア / 朝一 / 1200G / 天井RT」と正式名・通称・型式名を組み替え、当時解析、P-WORLD、K-Navi、HAZUSE、旧掲示板、回顧資料まで再探索したが、設定変更時に1200G天井RTカウンタ、ナビポイント、RT状態をどう処理するか直接説明する資料を確定できず。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 据え置き時の1200Gカウンタ、RT残状態、ナビポイントの前日跨ぎを直接確定できず。一般的な5号機挙動から推測しない。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
  - 電源OFF→ONのみの場合の天井RTカウンタ、RT状態、ナビポイント、液晶表示復帰を直接説明する本機固有資料を確定できず。
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`
  - RT終了後1200Gという公開ゲーム数契機は確認済みだが、設定変更/電断時にリセットか引継ぎかは未確定。
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - 通常仕様の救済RT到達はRT終了後1200G。設定変更後に短縮/同値/消滅となるかの公開根拠を確定できず。
- modeAfterReset: `NONE_CONFIRMED`
  - 朝一専用モードや設定変更時モード振り分けは確認できず。
- stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
  - RT状態・ナビポイント等の設定変更時処理が未確定。
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits: `NONE_CONFIRMED`
  - 設定変更専用の朝一恩恵は確認できず。
- resetPenalties: `NONE_CONFIRMED`
  - 設定変更専用の不利要素は確認できず。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
  - 「ガックン / 初期出目 / 液晶 / HONEYメーター / ナビポイント / 据え置き判別」まで検索語を変更したが、本機固有の客側変更判別法を確定できず。
- numericResetData: `NONE_CONFIRMED`
  - 設定変更時のみ適用されるモード振り分け、朝一当選率、短縮天井G数、恩恵発生率などの公開数値は確認できず。

resetBehaviorConfidence: LOW

## conflicts

### CONFLICT_RELEASE_TIMING
- 公式製品ページ / 公式一覧 / P-WORLD: 2008年1月。
- グリーンべると: 2008-02-01に新機種発表展示会。
- K-Navi: 2008-02-01展示会を2008-02-05報道。
- 当時系業界史: 2008年2月上旬発売。
- 一本化しない。

### CONFLICT_SYSTEM_LABEL
- メーカー公式: 「ボーナス+AT」「超簡単なART搭載」。
- P-WORLD: 5号機、RT。
- 当時業界記事: ボーナス後RT「キューティーゲーム」。
- 解析: 天井RT / RT延命。
- 物差し分類では実際のリプレイタイム構造を優先してボーナス+RTとし、公式商品分類は原文のまま別保持。

### CONFLICT_REG_PAYOUT_THRESHOLD
- P-WORLD / パチマガスロマガ: 144枚を超える払い出しで終了。
- K-Navi: 114枚を超える払い出しで終了。
- 平均化しない。主系列は複数一致の144枚超。

### CONFLICT_RETROSPECTIVE_SPEC
- 5号機クロニクルは同名機について `SUPER BIG約448枚 / NORMAL BIG約311枚 / REG約129枚`、20G CZからRT、約0.6枚/G等を記載。
- P-WORLD、パチマガ、HAZUSE、K-Navi、メーカー公式の商品説明と根本構造・ボーナス構成が一致しない。
- 別機種/別仕様混入または後年整理誤りの可能性は断定せず、主性能値へ流用しない。

## sources

取得日: 2026-09-01

1. ユニバーサルエンターテインメント公式 — ウルトラキューティーハニー
   - https://www.universal-777.com/product/slot/ultra_cutiehoney/
   - メーカー、5号機、商品名、発売2008年1月、ボーナス+AT表記、ART/ナビ概要。
   - reliability: OFFICIAL
2. ユニバーサルエンターテインメント公式 — パチスロ製品一覧
   - https://www.universal-777.com/product/slot/index.html
   - 発売年月2008年1月を再確認。
   - reliability: OFFICIAL
3. P-WORLD — ウルトラキューティーハニー3
   - https://www.p-world.co.jp/machine/database/5049
   - 型式名、検定番号、導入2008年01月、合成、機械割、払い出し条件、RT分類。
   - reliability: INDUSTRY_DB_HIGH
4. パチマガスロマガ — ウルトラキューティーハニー 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/37/a.php
   - 同時成立/天井RT/RT延命、BIG約310枚、REG約101枚。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/37/h.php
   - 設定1/4/6/HのBIG・REG・合成精密値、PAYOUT。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 小役出現確率・通常時
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/37/c.php
   - 1000円あたり41.46/41.94/42.58/43.60G。
   - reliability: ANALYSIS_HIGH
7. HAZUSE — ウルトラキューティーハニー
   - https://hazuse.com/machine/pachislot/7S0646/
   - 型式名、検定番号、設定別BIG/REG/合成/PAY OUT、設定体系。
   - reliability: ANALYSIS_HIGH
8. K-Navi — ウルトラキューティーハニー
   - https://p-kn.com/slot/764/
   - 合算、機械割、RTナビポイント/繰越、払い出し条件。REG払い出し条件は他資料と競合。
   - reliability: ANALYSIS_HIGH / CONFLICT_PARTIAL
9. グリーンべると — アルゼが展示会開催、2機種を発表
   - https://web-greenbelt.jp/00003493/
   - 2008-02-01発表展示会、RT/チェリーナビ/ナビポイント概要。
   - reliability: INDUSTRY
10. K-Navi — 新機種発表展示会速報
   - https://p-kn.com/topics/exhibition/247/
   - 2008-02-01展示会を2008-02-05報道。
   - reliability: INDUSTRY
11. パチスロ業界初まとめ — 更新情報4
   - https://slothistory.com/kousin_kako04.html
   - 当時系履歴で `2008/2/上発売`。
   - reliability: RETROSPECTIVE_INDUSTRY_HISTORY_MEDIUM
12. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 2008年1月表記。ただしボーナス構成/RT構造が主系列と競合するため競合資料としてのみ保持。
   - reliability: RETROSPECTIVE_DB_MEDIUM / CONFLICT
13. 2008-01-11当時個人記録 — キリアのスロット日記
   - https://plaza.rakuten.co.jp/kirialoverio/backnumber/200801/
   - 約40〜45G/1000円、RT純増約0.5枚/G、RT終了後1200GでRT突入の当時記述。
   - reliability: CONTEMPORARY_SECONDARY_LOW_MEDIUM
14. キューティーハニーシリーズ回顧
   - https://www.marimo0925.net/pachislot-kikaiwari-ranking-cutie-honey-ban/
   - RT純増約0.5枚/G、BIG後orRT終了後1200GでRT突入を後年再確認。
   - reliability: RETROSPECTIVE_SECONDARY_MEDIUM

## missingFields

- 設定変更時の1200G天井RTカウンタのリセット/引継ぎ。
- 据え置き・電源OFF→ON時の1200Gカウンタ、RT残状態、ナビポイント処理。
- 本機固有のガックン、初期出目、液晶/HONEY表示等による変更判別。
- 2008年1月発売表記と2008年2月1日発表展示会/2月上旬発売記録の正確な定義差・実ホール導入日。
