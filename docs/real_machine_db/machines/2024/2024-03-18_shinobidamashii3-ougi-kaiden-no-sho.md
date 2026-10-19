# 忍魂参 ～奥義皆伝ノ章～

recordNo: 1636
machineName: 忍魂参 ～奥義皆伝ノ章～
aliases: スマスロ忍魂参 / 忍魂3 / L忍魂参 / 忍魂参 奥義皆伝ノ章
manufacturer: 大都技研
formalModel: L忍魂参～奥義皆伝ノ章～A3
inspectionCode: 3S1553
releaseDate: 2024-03-18
generation: 6号機 / スマスロ
systemType: AT / 周期抽選 + CZ / ゲーム数上乗せAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- Amusement Japan、グリーンべると/P-WORLD、K-Navi、HAZUSEが2024-03-18導入で一致。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- HAZUSEは型式 `L忍魂参 ～奥義皆伝ノ章～A3`、検定番号 `3S1553` を掲載。
- 一部HAZUSE旧表示では型式欄が `L忍魂~奥義皆伝ノ章~` と省略されるが、同一検定番号3S1553の同一機として扱う。
confidence: ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.8%
- setting2: 99.1%
- setting3: 101.4%
- setting4: 105.5%
- setting5: 108.5%
- setting6: 112.0%
initialHitBySetting:
- setting1: AT初当り 1/368.7
- setting2: AT初当り 1/362.9
- setting3: AT初当り 1/352.4
- setting4: AT初当り 1/334.4
- setting5: AT初当り 1/318.1
- setting6: AT初当り 1/305.0
czProbabilityBySetting:
- setting1: CZ 1/147.0
- setting2: CZ 1/145.7
- setting3: CZ 1/143.1
- setting4: CZ 1/138.6
- setting5: CZ 1/133.7
- setting6: CZ 1/132.0
baseGamesPer50: 約34.0G/50枚
netIncrease:
- AT「月光ノ刻」: 約2.0枚/G
- 神速ノ刻 / 上位AT「真神速ノ刻」: 約4.5枚/G
basicPayout:
- AT「月光ノ刻」: 初回50G+α
- 疑似BIG: 約100枚
- 上位AT前「バレルCRASH」: 平均上乗せ期待約160G（プレミアムは約310G、比較補助値）
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は周期抽選。周期カウンター100pt減算で1周期到達、平均約60G。
- 周期到達時は高確パート / CZ / ATを抽選し、5周期目到達時はCZ以上に当選。
- CZ「潜入」は設定1〜6で1/147.0〜1/132.0。
- AT間ゲーム数天井は通常最大979G+αで、到達後は成功確定CZ経由でAT当選。
- CZ間で4周期連続スルーすると、次の5周期目でCZ当選濃厚。
- AT「月光ノ刻」は初回50G+α、純増約2.0枚/G。神速ノ刻・真神速ノ刻は純増約4.5枚/G。
- 再廻ノ試練は15G、成功期待度約52%。成功でバレルCRASHを経由し真神速ノ刻へ移行。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_CYCLE_CYCLE_COUNTER_AND_GACKUN_CONTRACT
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間をRESET、AT間天井をRESET、内部状態をRESETすることをなな徹機種専用資料で確認。
- 設定変更時はAT間天井が通常979G+αから579G+αへ短縮される。
- コンプリート機能で打ち止め状態の場合、解除には設定変更が必要。
- 設定変更時の周期カウンター残量・CZ間周期スルー回数の個別初期化契約、および専用モード振り分け数値は、資料系統を変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。内部状態RESETからの推測補完はしない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CEILING_STATE_AND_579G / UNVERIFIED_AFTER_RESEARCH_FOR_CYCLE_COUNTER_AND_MODE_DISTRIBUTION

### carryOverBehavior
- 据え置き時は有利区間・AT間天井・内部状態を引き継ぐことをなな徹機種専用資料で確認。
- よって据え置き時は設定変更専用579G天井へ短縮されず、前日のAT間ハマリを含め通常天井979G+αまでの進行を引き継ぐ。
- 周期カウンター残量およびCZ間周期スルー回数について、据え置き時の個別CARRY_OVERを直接明記した高信頼資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CEILING_AND_STATE / UNVERIFIED_AFTER_RESEARCH_FOR_CYCLE_PROGRESS_DETAIL

### powerCycleBehavior
- 純電源OFF→ON時について、後年攻略整理資料では「有利区間・天井・内部モードを引き継ぐ」とされる。
- ただし、なな徹の機種専用朝一ページは設定変更/据え置き比較までで、純電断単独の全項目を明記していないため、本DBでは `ANALYSIS_SINGLE / SECONDARY_CORROBORATION` とし、設定変更扱いと断定しない。
- 周期カウンター表示、CZ間周期回数、開始ステージ、ガックン等の純電断固有契約は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_SINGLE_FOR_POWER_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_DISPLAY_CYCLE_AND_GACKUN

### gameCounterReset
- 設定変更: AT間天井ゲーム数RESET。設定変更後専用最大579G+α。
- 据え置き: AT間天井ゲーム数CARRY_OVER。
- 純電源OFF→ON: 後年攻略整理ではCARRY_OVER。高信頼一次/主要解析の直接契約が弱いため `ANALYSIS_SINGLE`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### ceilingAfterReset
- 通常AT間天井: 最大979G+α。
- 設定変更後: 最大579G+αへ短縮。
- 周期間天井: CZ間4周期スルー後、5周期目でCZ当選濃厚。設定変更専用短縮値は確認されない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 明示的な朝一専用「通常A/B/天国」のようなモード振り分けは確認されない。
- 設定変更時のモード/周期初期化に関する具体的振り分け公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 後年攻略整理は純電断時の内部モード引継ぎを掲載するが、機種専用主要解析での直接裏取りが弱いため補助情報扱い。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_RESET_DISTRIBUTION / ANALYSIS_SINGLE_FOR_POWER_MODE_CARRYOVER

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 後年攻略整理では内部モード引継ぎ。状態とモードの語義が完全一致しないため、内部状態全般へ拡張せず `UNVERIFIED_AFTER_RESEARCH` を残す。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_PURE_POWER_STATE

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 有利区間ランプから設定変更/据え置きを判別することはできない。
- 純電源OFF→ON: 後年攻略整理ではCARRY_OVERだが、主要解析による直接照合不足のため `ANALYSIS_SINGLE`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_CARRYOVER_AND_LAMP_NON_DETECTION / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### resetBenefits
- 最大の公開朝一恩恵はAT間天井の短縮。通常979G+α → 設定変更後579G+α。
- 設定変更専用のAT/CZ当選率上昇、モード振り分け、初回周期優遇などの比較可能な固定数値は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_579G / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_OTHER_NUMERIC_BENEFITS

### resetPenalties
- 設定変更時のみの主要な不利要素・朝一ペナルティについて、比較可能な公開固定値は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### resetDetection
- 有利区間ランプでは設定変更/据え置き判別不可。
- 朝一579G+αを超えてAT非当選なら、設定変更後専用天井と整合しないため据え置き濃厚材料。ただしデータカウンターと内部AT間G数の差、前兆中などを考慮し「確定判別」とはしない。
- なな徹はリセット判別を「現在調査中」としている。
- `忍魂参 / 忍魂3 / L忍魂参～奥義皆伝ノ章～A3 / 大都技研` × `設定変更 / リセット / 据え置き / 電源OFF ON / ガックン / 朝一 / 有利区間` で検索語を変え、メーカー公式動画・業界・主要解析・後年攻略整理まで再探索したが、本機固有ガックン条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LAMP_NON_DETECTION / UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN

### numericResetData
- 通常AT間天井: 979G+α
- 設定変更後AT間天井: 579G+α
- 天井短縮幅: 400G
- 周期間天井: CZ間4周期スルー → 5周期目CZ当選濃厚
- 設定変更時モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用AT/CZ当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- ガックン発生率: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更後AT間天井: 最大579G+α（通常最大979G+αから400G短縮）。
- 設定変更時のモード振り分け・朝一AT/CZ当選率など、これ以外の比較可能な朝一専用公開固定値は確認されない。

## missingFields
- 設定変更時の周期カウンター残量/CZ間周期スルー回数の個別初期化契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の周期表示・開始ステージ・内部状態全般の直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 朝一579G短縮以外の比較可能な専用当選率/恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 型式表記は `L忍魂参～奥義皆伝ノ章～A3` と、HAZUSE旧表示の `L忍魂~奥義皆伝ノ章~` がある。検定番号3S1553・機種・導入日が一致するため、前者をcanonical表記、後者を省略表記として保持する。
- 今回確認した性能コア（AT初当り、CZ確率、機械割、ベース、純増）に実質的な数値競合は確認されない。

## sources
取得日: 2026-09-14

### 公式 / 業界
- 大都技研 公式PV: https://www.youtube.com/watch?v=P9VNz58sYr0
- 大都技研 公式解説動画: https://www.youtube.com/watch?v=haAw7lxMqmo
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10004121/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/26977/greenbelt

### 型式 / 性能コア / システム
- HAZUSE: https://hazuse.com/machine/pachislot/3S1553/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/83053/
- パチ&スロ必勝本 システム解説: https://p.hisshobon.jp/vpage/2604/4
- K-Navi: https://p-kn.com/slot/4110/
- なな徹 初当たり/CZ/機械割: https://nana-press.com/kaiseki/machine/714/19644/
- なな徹 CZ「潜入」: https://nana-press.com/kaiseki/machine/714/20090/
- 一撃 天井/朝一: https://1geki.jp/slot/l_shinodama3_kaiden/3/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/205577/

### resetBehavior / 朝一
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/714/20086/
- ぽこすろっと（後年整理・補助）: https://www.nankaikoya.jp/shinobi3-kitaichi/
- スロパチクエスト（後年整理・純電断補助）: https://www.slopachi-quest.com/article/lshinobi3-tenjou/
- 回胴に散る。（有利区間後とリセット天井比較補助）: https://kaidou.repop.jp/archives/513
