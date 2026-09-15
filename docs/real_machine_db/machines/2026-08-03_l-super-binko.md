# Lすーぱぁびん娘

recordNo: 1811
machineName: Lすーぱぁびん娘
aliases: Ｌすーぱぁびん娘 / すーぱぁびん娘 / スーパービン娘 / スマスロびん娘
manufacturer: ヤーマ（販売/ブランド: ベルコ）
formalModel: Lびん娘NY1
inspectionNumber: 5S1500
releaseDate: 2026-08-03
generation: 6.5号機 / スマスロ
systemType: AT / 周期CZ+規定G数AT / 上位AT搭載
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- ベルコ公式で2026年8月登場、純増約2.8枚/G・約5.0枚/G、1セット100Gを確認。
- 遊技日本・情報島+で製造元ヤーマ、型式 `Lびん娘NY1` を確認。情報島+の検定通過記事でもヤーマ `Lびん娘NY1` を確認。
- P-WORLD、6確、パチビー等で2026-08-03導入を照合。
- HAZUSE/スロベースで検定番号5S1500を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.3%
- setting2: 98.9%
- setting4: 103.3%
- setting5: 107.2%
- setting6: 112.5%
- settingL: 公表値UNVERIFIED（搭載はP-WORLDで確認、デモ中下パネル消灯）
initialHitBySetting:
  CZ合算:
  - setting1: 1/395.7
  - setting2: 1/394.8
  - setting4: 1/394.1
  - setting5: 1/392.8
  - setting6: 1/391.5
  AT_夢娘ライブ:
  - setting1: 1/498.7
  - setting2: 1/477.8
  - setting4: 1/447.0
  - setting5: 1/423.4
  - setting6: 1/392.8
baseGamesPer50: 約31.0G/50枚（設定1）
netIncrease:
- 夢娘ライブ: 約2.8枚/G
- クライMAXライブ: 約5.0枚/G
basicPayout:
- 夢娘ライブ: 1セット100G
- クライMAXライブ: 1セット100G / 継続期待度82%OVER（引き戻し含む）
modeSpecificMinimumData:
- AT間ゲーム数天井: 最大1200G、到達時AT当選+夢娘チャンス。
- CZ間周期天井: 娘ポイント最大10周期、CZ当選濃厚/確定系の解析。
- 娘ポイントは各キャラ100ptで1周期、超過分は次周期へ持ち越し。
confidence: OFFICIAL_FOR_AT_STRUCTURE / ANALYSIS_HIGH_FOR_NUMERIC_SPEC / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時はAT間ゲーム数天井が1200G→900Gへ短縮。
- CZ間周期天井が10周期→7周期へ短縮。
- 各キャラの娘ポイントに30〜90ptを加算して開始し、平均53pt。
- 二次解析には設定変更時「内部状態RESET」表記があるが、高優先の機種固有一次/主要解析で三者比較を固定できないため stateAfterReset では単独確定扱いにしない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILINGS_AND_POINTS

### carryOverBehavior
- 通常遊技中、娘ポイントの100pt超過分は次周期へ持ち越し、AT終了後もAT当選前の娘ポイントを引き継ぐ仕様を確認。
- ただし「設定据え置き+電源OFF/ON」のゲーム数天井・周期・娘ポイント・内部状態を明示した高優先の機種固有比較表は今回の多語再探索でも固定できず、据え置き固有の三者比較はUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_IN_GAME_POINT_CARRY / UNVERIFIED_FOR_EXPLICIT_STAYOVER_TRIPLE_COMPARISON

### powerCycleBehavior
- `Lすーぱぁびん娘 / Lびん娘NY1 / ヤーマ / ベルコ / 電源OFF ON / 据え置き / 朝一 / リセット / 天井 / ガックン / 有利区間` を組み替えて再探索したが、純電源OFF→ON時のゲーム数・周期・娘ポイント・内部状態を直接列挙する高信頼機種固有資料を固定できず。
- 一般的スマスロ仕様から推測補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
settingChange: RESET_WITH_SHORTENED_CEILING
carryOver: UNVERIFIED_AFTER_RESEARCH
powerCycle: UNVERIFIED_AFTER_RESEARCH
notes:
- 設定変更後は最大900Gとなるため通常1200G天井の進行をそのまま継続する挙動ではない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE

### ceilingAfterReset
normalGameCeiling: 最大1200G
resetGameCeiling: 最大900G
normalCycleCeiling: 最大10周期
resetCycleCeiling: 最大7周期
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機について一般的な名称付き内部モードの公開は今回確認できず。規定G数振り分けと娘ポイント周期の二軸を確認。
- 設定変更専用モード振り分けはNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 一部二次整理で設定変更時「内部状態RESET」とする記載あり。
- 高優先の機種固有資料による状態定義・再抽選内容・純電断との直接比較が固定できないため `UNVERIFIED_AFTER_RESEARCH_SECONDARY_RESET_WORDING_EXISTS` として保持。
confidence: ANALYSIS_SINGLE / UNVERIFIED_FOR_DETAILED_STATE

### advantageousSectionReset
- 上位AT等を含むスマスロAT機であることは確認済み。
- 設定変更時の有利区間処理、および設定変更以外の有利区間切断恩恵を機種固有の高信頼公開資料で今回固定できず。一般仕様から推測しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- AT間天井: 最大1200G→900G。
- CZ間周期天井: 最大10周期→7周期。
- 各娘ポイント: 30〜90pt加算、平均53pt。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更専用の天井延長、明示的冷遇、朝一不利数値はNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- リセット後は最大900G・最大7周期・各娘ポイント30〜90pt加算という挙動が推測材料。
- ただしこれらは即時確定判別ではない。
- 本機固有ガックン条件/発生率、純電断と設定変更での液晶初期表示差は検索語・資料系統を変更して再探索後もUNVERIFIED_AFTER_RESEARCH。
- 設定Lはデモ状態中の下パネル消灯がP-WORLD掲載。これは通常設定変更/据え置き判別とは別の設定L識別情報として分離。
confidence: ANALYSIS_HIGH_FOR_RESET_BEHAVIOR / UNVERIFIED_FOR_GAKKUN_AND_IMMEDIATE_UI

### numericResetData
resetGameCeiling: 900G
normalGameCeiling: 1200G
resetCycleCeiling: 7周期
normalCycleCeiling: 10周期
resetDaughterPointAdd:
- range: 30〜90pt（各キャラ）
- average: 53pt
notes:
- 個別pt振り分け率は今回高信頼固定せず、公開されている範囲・平均のみ収録。
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## conflicts
- resetCycleCeiling: ワンチャンくん検索要約には「設定変更時に周期天井も短縮されるとは確認できていない」とある一方、なな徹・スロベース・イチカツ等の導入後解析は10周期→7周期で一致。複数の具体的解析値をcanonicalとし、前者を `CONFLICT_LOW_PRIORITY_SUMMARY_LAG` として扱う。
- 設定変更時内部状態: 一部二次整理にRESET表記があるが、状態定義と純電断比較の高優先資料不足。確定値に昇格させない。

## missingFields
- 設定Lの機械割/初当り（公表値）
- 据え置き時のゲーム数・周期・娘ポイント・内部状態の直接比較資料
- 純電源OFF→ON時のゲーム数・周期・娘ポイント・内部状態の直接比較資料
- 設定変更時の有利区間処理の機種固有直接資料
- 本機固有ガックン条件/発生率
- 液晶初期表示による設定変更/純電断の即時判別

## sources
retrievedAt: 2026-09-15
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/lbinko/
- 遊技日本 発売発表: https://yugi-nippon.com/pachinko-new-machine/post-77120/
- 情報島+ 発売発表: https://p-johojima.jp/new_machine/post-32064/
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-30877/
- パチビー 内覧会: https://www.pachibee.jp/pparticles/view/1346
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10496
- 6確: https://www.kaku6.jp/slot/binko/
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/1191/
- なな徹 朝一リセット: https://nana-press.com/kaiseki/machine/1191/38224/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/260918/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1500/
- スロベース: https://slobase.jp/machines/super-bin-musume
- イチカツ: https://ichikatsu.com/lbinko/
