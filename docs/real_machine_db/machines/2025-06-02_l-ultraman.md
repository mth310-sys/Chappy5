# L ULTRAMAN

recordNo: 1730
machineName: L ULTRAMAN
aliases: スマスロ ウルトラマン / ULTRAMAN
manufacturer: オッケー.（京楽産業.製）
formalModel: LパチスロULTRAMAN-KE
inspectionCode: 4S1311
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ
systemType: AT / バトルAT+擬似ボーナスループ
settings: L / 1 / 2 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- HAZUSEで検定番号 `4S1311`、型式 `LパチスロULTRAMAN-KE`、導入開始日2025-06-02、メーカー オッケー.を確認。
- 遊技通信/P-WORLDの2025-04-22発表記事で型式 `LパチスロULTRAMAN KE`、京楽産業.製、2025-06-02ホール導入予定を確認。ハイフン有無は表記差として同一型式扱い。
- 円谷フィールズホールディングスの発売告知で『L ULTRAMAN』発売を確認。
- HAZUSE/P-WORLDは設定L搭載を明記。通常営業用の公開性能値は設定1/2/4/5/6で、設定3は非搭載。
confidence: OFFICIAL_IDENTITY / INDUSTRY_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- settingL: 調査中 / 公開値なし
- setting1: 97.7%
- setting2: 99.0%
- setting4: 104.1%
- setting5: 109.7%
- setting6: 114.9%
initialHitBySetting:
  at:
  - settingL: 調査中 / 公開値なし
  - setting1: 1/320.2 [canonical; HAZUSE/P-WORLD現行DBは1/320.1]
  - setting2: 1/308.7
  - setting4: 1/271.9 [canonical; HAZUSE/P-WORLD現行DBは1/271.8]
  - setting5: 1/247.3
  - setting6: 1/222.8
baseGamesPer50: 約33.6G（設定1～6）
netIncrease:
- 擬似BONUS / エクストラゲーム: 約4.0枚/G
- ウルトラタイム: 約0.7枚/G
basicPayout:
- オープニングBONUS: 20G、純増約4.0枚/G
- ULTRA BATTLE MODEバトルパート: 8G
- ウルトラタイム: 10G ST、純増約0.7枚/G、平均継続率約79%
- エクストラゲーム: 12G+α、純増約4.0枚/G
confidence: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役直撃・ベルポイント経由CZ等からAT「ULTRA BATTLE MODE」を目指す。
- ATはATレベル1～6で継続率を管理し、公開目安は約60%～約91%。
- AT中は擬似BONUSとバトルパートのループが主軸。
- AT当選時はWAVE獲得抽選があり、業界発表では約50%でいずれかのWAVEを獲得。
- 最終決戦勝利後の「リミッター解除」はVストック・引き戻し込みで継続率約93%。
- 通常最大天井998G+α、到達時はAT当選。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_DIRECT_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_RESET_LEVEL_NUMERICS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間: 機種別朝一比較表で `リセット` を直接確認。
- 天井: リセットされ、通常最大998G+αから665G+αへ短縮。
- ゲーム数: リセット、表示0スタート。
- ポイントカウンタ: 1geki比較表で0スタート。
- 内部状態: リセット。
- ATレベル: リセット/再抽選。AT終了後より高レベルが優遇。
- ループストックレベル: リセット/再抽選、高レベル選択率優遇。
- 開始ステージ: 学校ステージ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は、なな徹の機種別比較表で有利区間・天井・ゲーム数・内部状態・ATレベル・ループストックレベルを `引き継ぐ` と直接確認。
- ベルポイント/ポイントカウンタは据え置き欄で独立列挙されていないが、純電源OFF→ONではポイントを引き継ぐ機種別比較表がある。據え置き固有ポイント挙動を一般仕様から推測して独立確定はしない。
confidence: ANALYSIS_HIGH_FOR_LISTED_FIELDS / UNVERIFIED_DIRECT_FOR_STANDALONE_POINT_CARRYOVER_WORDING

### powerCycleBehavior
- 電源OFF→ONのみでは、天井G数を引き継ぐ。
- ポイントカウンタは内部的に引き継ぐが、表示は0に見える。
- ゲーム数も内部的に引き継ぐが、表示は0に見える。
- 内部状態を引き継ぐ。
- ループストックレベルを引き継ぐ。
- ステージは学校ステージ。ただしRED ZONE等の滞在状況では該当状態を保持する旨の注記あり。
- 純電断時の有利区間そのものを独立して直接列挙した高優先資料は固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_ADVANTAGEOUS_SECTION_WORDING_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_POINTS_GAMES_STATE_LOOP_LEVEL / UNVERIFIED_DIRECT_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: 内部ゲーム数をリセットし0スタート。
- 据え置き: ゲーム数を引き継ぐ。
- 電源OFF→ON: 内部ゲーム数を引き継ぐ一方、見た目のゲーム数表示は0となる。
- よって朝一表示0だけでは設定変更/据え置き判別はできない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalMaximumCeiling: 998G+α
resetMaximumCeiling: 665G+α
ceilingBenefit: AT「ULTRA BATTLE MODE」当選
maximumCeilingReduction: 333G相当+α差
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機に一般的な通常A/B等の「朝一通常モード」振り分けは今回の高優先資料では確認できなかった。
- 朝一挙動で比較可能な内部レベルとして、ATレベル1～6とループストックレベルを管理。
- 設定変更時ATレベルは再抽選され、高レベル優遇。ループストックレベルも再抽選され、高レベル選択率優遇。
- 据え置きではATレベル・ループストックレベルを引き継ぐ。
- 設定変更時のループストックレベル具体振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_AT_LEVEL / PUBLIC_VALUE_NOT_FOUND_FOR_RESET_LOOP_STOCK_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 内部状態引き継ぎ。
- 電源OFF→ON: 内部状態引き継ぎ。
- 設定変更直後の通常/高確/超高確等の具体振り分け率は、機種名・正式型式・設定変更・朝一・内部状態・高確で資料系統を変えて再探索したが `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / PUBLIC_VALUE_NOT_FOUND_FOR_DISTRIBUTION

### advantageousSectionReset
- 設定変更: なな徹の機種別朝一比較表で有利区間 `リセット` を直接確認。
- 据え置き: 同表で有利区間 `引き継ぐ` を直接確認。
- 電源OFF→ONのみ: 有利区間を独立列挙した機種固有の直接資料は固定できず `UNVERIFIED_DIRECT_POWER_CYCLE_ADVANTAGEOUS_SECTION_WORDING_AFTER_RESEARCH`。
- 通常遊技中の有利区間切断時恩恵を設定変更朝一へ勝手に流用しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_DIRECT_FOR_POWER_CYCLE

### resetBenefits
- 最大天井998G+α → 665G+αへ短縮。
- 初回ATのATレベル振り分けが優遇。レベル4以上は設定変更時23.0%（14.7+6.4+1.9）に対しAT終了後8.8%（5.5+2.4+0.9）。
- ループストックレベルは設定変更時に再抽選され、高レベル選択率優遇。
- 設定変更後1回目のオープニングBONUSでは、ATレベル3以上示唆のエピソードが `8割以上` で発生すると必勝本が明記。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_CEILING_AND_AT_LEVEL / ANALYSIS_HIGH_SINGLE_FOR_EPISODE_80PLUS

### resetPenalties
- 設定変更固有の公開された明確な冷遇率・不利益は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 高レベルAT/ループストック優遇と天井短縮が主な公開朝一差分。
confidence: ANALYSIS_HIGH

### resetDetection
- 朝一665G+αを超えてAT非当選なら、設定変更後の最大天井と矛盾するため据え置き推測の強い材料となる（前日状況との併用前提）。
- ただし純電源OFF→ONでもゲーム数表示・ポイント表示が0に見えるため、表示0単独では変更判別不可。
- なな徹は「リセット判別 現在調査中」、6確も特有演出は未確認としている。
- 本機固有のガックン条件/発生率は、`L ULTRAMAN` / `LパチスロULTRAMAN-KE` / オッケー / 設定変更 / リセット / 朝一 / 据え置き / ガックン / リール始動で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_DISPLAY_CLUES / UNVERIFIED_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: 998G+α
resetMaximumCeiling: 665G+α
resetATLevel1: 32.0%
resetATLevel2: 23.0%
resetATLevel3: 22.0%
resetATLevel4: 14.7%
resetATLevel5: 6.4%
resetATLevel6: 1.9%
atEndATLevel1: 52.9%
atEndATLevel2: 22.1%
atEndATLevel3: 16.2%
atEndATLevel4: 5.5%
atEndATLevel5: 2.4%
atEndATLevel6: 0.9%
resetATLevel4OrHigher: 23.0%
atEndATLevel4OrHigher: 8.8%
firstOpeningBonusEpisodeAfterReset: 8割以上
resetLoopStockLevelDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetStateDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- AT初当り設定1/4は、情報島＋・ちょんぼりすた・SLOT HACK等が `1/320.2 / 1/271.9`、P-WORLD/HAZUSE現行DBが `1/320.1 / 1/271.8`。差は小さいが平均せず `CONFLICT_ROUNDING_OR_SOURCE_PRECISION` として保持し、多数一致かつ業界発表側の `1/320.2 / 1/271.9` をcanonical採用。
- Amusement Japan記事に設定6初当り `1/122.8` の記載があるが、情報島＋・1geki系・P-WORLD/HAZUSE等の `1/222.8` と大きく乖離し、文脈上の誤記と判断。`CONFLICT_LIKELY_SOURCE_TYPO_122.8_VS_MULTI_SOURCE_222.8` として隔離しcanonicalは1/222.8。
- 純増表記は「AT機 約4.0枚/G」とする業界/機種概要と、ウルトラタイム約0.7枚/G・エクストラゲーム/擬似BONUS約4.0枚/Gという区間別解析がある。定義差なので平均化せず区間別に保存。

## missingFields
- 純電源OFF→ON時の有利区間そのものの機種固有直接契約: UNVERIFIED_DIRECT_POWER_CYCLE_ADVANTAGEOUS_SECTION_WORDING_AFTER_RESEARCH
- 据え置き時のベルポイント/ポイントカウンタ単独直接列挙: UNVERIFIED_DIRECT_STANDALONE_POINT_CARRYOVER_WORDING_AFTER_RESEARCH
- 設定変更時ループストックレベルの具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更直後の内部状態具体振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定LのAT初当り/出玉率: PUBLIC_VALUE_NOT_FOUND / 調査中表示

## sources
acquiredAt: 2026-09-14
- OFFICIAL / manufacturer product: https://www.ok777.co.jp/lineup/heros_ultraman_s/
- OFFICIAL_GROUP / 円谷フィールズ発売告知: https://digitalpr.jp/r/105067
- INDUSTRY / 遊技通信・P-WORLD: https://news.p-world.co.jp/articles/30766/yugitsushin
- INDUSTRY / 情報島＋発表: https://p-johojima.jp/new_machine/post-4824/
- INDUSTRY / Amusement Japan・P-WORLD: https://news.p-world.co.jp/articles/30757/amusement
- ANALYSIS_HIGH / HAZUSE機種情報: https://hazuse.com/hd/4s1311/
- ANALYSIS_HIGH / HAZUSE詳細: https://hazuse.com/machine/pachislot/4S1311/
- ANALYSIS_HIGH / HAZUSE ATレベル: https://hazuse.com/machine/pachislot/4S1311/genre/209/
- ANALYSIS_HIGH / 1geki 朝一・天井: https://1geki.jp/slot/l_ultraman/3/
- ANALYSIS_HIGH / 1geki ウルトラタイム: https://1geki.jp/slot/l_ultraman/87/
- ANALYSIS_HIGH / なな徹 朝一: https://nana-press.com/kaiseki/machine/947/30105/
- ANALYSIS_HIGH / 必勝本 オープニングBONUSエピソード: https://hisshobon.com/machineinfo/87220/
- ANALYSIS_HIGH / P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10271
- ANALYSIS_SINGLE / 6確: https://www.kaku6.jp/slot/ultraman/
- ANALYSIS_SINGLE / ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/236589/

## researchNotes
- 2026年後発機 `L ULTRAMAN 最終決戦` が検索結果へ混入しやすいため、2025年機の正式型式 `LパチスロULTRAMAN-KE`、検定番号 `4S1311`、導入日2025-06-02で分離した。
- UNVERIFIED判定は機種名/正式型式/メーカー/設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ポイント/内部状態/有利区間/ガックンへ検索語を変え、公式・業界・主要解析・複数DBを横断後に付与。
