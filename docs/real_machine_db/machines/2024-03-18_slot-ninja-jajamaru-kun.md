# SLOT忍者じゃじゃ丸くん

recordNo: 1637
machineName: SLOT忍者じゃじゃ丸くん
aliases: 忍者じゃじゃ丸くん / SLOTじゃじゃ丸くん / SジャジャマルHA
manufacturer: エレコ / ユニバーサルエンターテインメント
formalModel: S/ジャジャマル/HA
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2024-03-18
generation: 6.5号機 / メダルAT機
systemType: 疑似ボーナスAT / 完全告知 / 32G連チャンモード型
settings: 1 / 2 / 3 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチ&スロ必勝本、K-Navi、パチビーが2024-03-18導入で一致。
- ユニバーサルエンターテインメント公式発売発表は2024年3月導入予定、グリーンべると/遊技日本も2024年3月導入として発表。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLDの検定通過・新機種発表で型式 `S/ジャジャマル/HA`、製造元エレコを確認。
- 型式名・機種名・メーカー名・「検定番号」「公安委員会」等へ検索語を変えて再探索したが、個別検定番号コードは今回固定できず `UNVERIFIED_AFTER_RESEARCH`。推測しない。
confidence: INDUSTRY_HIGH_FOR_MODEL / UNVERIFIED_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- setting1: 97.7%
- setting2: 98.8%
- setting3: 101.5%
- setting5: 105.3%
- setting6: 108.0%
initialHitBySetting:
- setting1: ボーナス初当り 1/336.8 / BIG 1/172.0 / REG 1/362.0
- setting2: ボーナス初当り 1/321.2 / BIG 1/166.3 / REG 1/348.1
- setting3: ボーナス初当り 1/313.0 / BIG 1/155.4 / REG 1/322.8
- setting5: ボーナス初当り 1/274.2 / BIG 1/140.8 / REG 1/278.5
- setting6: ボーナス初当り 1/268.6 / BIG 1/130.6 / REG 1/256.2
baseGamesPer50: 約32.0G/50枚
netIncrease: 疑似ボーナス 約3.0枚/G
basicPayout:
- BIG: 70G / 約210枚
- REG: 30G / 約90枚
- 天国以上の獲得期待値: 約1430枚（比較補助値）
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は全役でボーナス抽選を行い、チェリー連続による「さくらランプミッション」とCZ「決戦の刻」（期待度約50%）も初当たり経路となる。
- 通常時モードは通常A / 通常B / 早駆け / さくらを基本とし、天国 / ガマ / 超ガマ / 保証 / コンテニューなど32G連チャン系モードを持つ。
- モード別天井は通常A/B・さくら最大1000G、早駆け200G、天国系・保証・コンテニュー32G。
- 通常のボーナス間ゲーム数天井は最大1000GでBBまたはRBに当選。
- 天国モード以上の獲得期待値は公式/業界発表で約1430枚、最高ボーナスループ率は約92%。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GACKUN_STAGE_AND_INSPECTION_CODE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間をRESET、天井進行をRESET、内部モードをRESETすることを複数攻略資料で確認。
- 設定変更時のモードは通常A / 通常B / 早駆け / さくらへ各25.0%で均等振り分け。
- 早駆け以外の通常A/B/さくら移行時を含む設定変更時は、37.5%で天井400G、62.5%で1000Gが選択されると複数資料で一致。
- 設定変更時の開始ステージ・本機固有リールガックン条件/発生率は検索語・資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_SECTION_MODE_AND_CEILING / UNVERIFIED_FOR_STAGE_AND_GACKUN

### carryOverBehavior
- 設定変更を行わない据え置き時は、電源OFF→ON比較資料と6.5号機の機種専用朝一資料により、天井進行・内部モード・有利区間を引き継ぐ扱いとする。
- ただし「据え置き」という語で3項目を個別列挙する一次資料は今回固定できず、純電断機種専用比較との整合で `ANALYSIS_HIGH / INDIRECT_FOR_WORDING` とする。
- さくら/裏さくらカウンタ等の細部まで据え置き契約を拡張せず、本DB粒度では `UNVERIFIED_AFTER_RESEARCH` を残す。
confidence: ANALYSIS_HIGH_FOR_CORE_CARRYOVER / UNVERIFIED_AFTER_RESEARCH_FOR_COUNTER_DETAIL

### powerCycleBehavior
- 純電源OFF→ONのみの場合、有利区間・天井・内部モードを引き継ぐことを機種専用朝一資料で直接確認。
- 純電断時の開始ステージ、さくらカウンタ/裏さくらカウンタ表示・内部値、本機固有ガックン挙動は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SECTION_CEILING_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_DISPLAY_COUNTER_AND_GACKUN

### gameCounterReset
- 設定変更: ボーナス間天井ゲーム数RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大天井: 1000G（モードにより200Gまたは32G）。
- 設定変更時: 37.5%で最大400Gへ短縮、62.5%で1000G。
- 早駆けモードは元々最大200Gのため、設定変更時モード振り分け25.0%自体も朝一の浅い当選要因となる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時: 通常A 25.0% / 通常B 25.0% / 早駆け 25.0% / さくら 25.0%。
- 据え置き・純電源OFF→ON: 内部モードCARRY_OVER。
- 通常稼働中の非有利区間移行時は約30%でコンテニューモード、非移行時は通常A 61.3% / 通常B 8.6% / 早駆け 21.5% / さくら 8.6%。これは設定変更専用振り分けとは別契約のため混同しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 本機の朝一比較で主要な内部状態はモードとして整理され、設定変更時RESET / 純電断CARRY_OVERが確認できる。
- CZ連戦状態、さくらカウンタ、裏さくらカウンタ等の個別状態の設定変更/据え置き/純電断契約を高信頼資料で全項目固定できず `UNVERIFIED_AFTER_RESEARCH`。モード契約から推測補完しない。
confidence: ANALYSIS_HIGH_FOR_MODE / UNVERIFIED_AFTER_RESEARCH_FOR_AUXILIARY_STATES

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER扱い。
- 純電源OFF→ON: CARRY_OVER。
- 通常稼働中、天国以上から転落する際などの非有利区間移行では約30%でコンテニューモードへ移行するが、これは朝一設定変更時の25%均等モード振り分けとは別契約。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は4モードが各25.0%で均等振り分けとなり、早駆け（最大200G）が25%で選ばれる。
- 設定変更時は37.5%で天井400Gが選択される。
- 通常A/B/さくらの通常稼働時有利区間移行振り分けと比較すると、朝一は通常B・早駆け・さくらが相対的に選ばれやすい。
- 朝一0Gから200Gを打った場合のメーカー公表機械割などは確認できず、後年攻略の期待値推定は観測/推定としてcanonical数値に採用しない。
confidence: ANALYSIS_HIGH_FOR_PUBLIC_FIXED_VALUES

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は、公式・業界・主要解析・後年攻略まで横断後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 主要解析ではリセット判別は「調査中」。開始ステージの設定変更/据え置き差も今回固定できない。
- 朝一で1000G到達前の400G天井発動や早駆け挙動はリセット期待を高める材料だが、通常運用でもモード・有利区間移行による浅い当選が存在するため単独の確定判別にはしない。
- 本機固有のリールガックン条件/発生率は `SLOT忍者じゃじゃ丸くん / S/ジャジャマル/HA / エレコ` × `設定変更 / リセット / 据え置き / 電源OFF ON / ガックン / 朝一` で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DETECTION_UNRESOLVED / UNVERIFIED_AFTER_RESEARCH_FOR_GACKUN

### numericResetData
- 設定変更時モード振り分け:
  - 通常A: 25.0%
  - 通常B: 25.0%
  - 早駆け: 25.0%
  - さくら: 25.0%
- 設定変更時天井振り分け:
  - 400G: 37.5%
  - 1000G: 62.5%
- 通常モード別天井:
  - 通常A/B/さくら: 1000G
  - 早駆け: 200G
  - 天国/ガマ/超ガマ/保証/コンテニュー: 32G
- ガックン発生率: UNVERIFIED_AFTER_RESEARCH

### publicMorningNumbers
- 通常A / 通常B / 早駆け / さくら: 各25.0%。
- 400G天井: 37.5%。
- 1000G天井: 62.5%。
- 早駆けモード最大天井: 200G。

## conflicts
- 性能コアの主要数値（設定別ボーナス初当り/BIG/REG/機械割、ベース、純増、BIG/REG枚数）は業界記事・必勝本・K-Navi・後年解析で実質一致し、今回CONFLICTなし。
- 一部中古/後年整理サイトに本機と無関係なAT仕様・機械割値が混在するページがあるため採用しない。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- setting-change / power-cycle start stage: UNVERIFIED_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- reset/carryover contract for sakura counter / hidden sakura counter / CZ-chain state: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2024-03-18群のcanonical候補4機のうち本機は3機目。
- `スマート沖スロ ドラゴンハナハナ～閃光～` No.1635、`忍魂参 ～奥義皆伝ノ章～` No.1636は処理済み。
- 次候補 `ドラゴンハナハナ～閃光～` は、既存No.1614 `ドラゴンハナハナ～閃光～-30` が30Φ版であり、同レコード内でも2024-03-18の25Φ版を別市場機と明記済み。次回は正式型式・25Φ仕様・導入日を再監査し、独立No.1638として採番可能か最終確定する。

## sources
取得日: 2026-09-14
- ユニバーサルエンターテインメント 新機種発売発表: https://www.universal-777.co.jp/news/20240123001589/
- 遊技日本 / P-WORLD 新機種発表・型式: https://news.p-world.co.jp/articles/26687/nippon
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/26625/nippon
- グリーンべると / P-WORLD 業界発表: https://news.p-world.co.jp/articles/26684/greenbelt
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/82987/
- パチ&スロ必勝本 モード移行抽選: https://hisshobon.com/machineinfo/82966/
- 必勝本 基本スペック別ページ: https://p.hisshobon.jp/vpage/2601/2
- K-Navi: https://p-kn.com/slot/4097/
- パチビー: https://www.pachibee.jp/machines/about/224020006
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9991
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/206392/
- スロパチクエスト 朝一/電源OFFON/天井: https://www.slopachi-quest.com/article/jajamarukun-tenjou/
- 一撃 設定変更時天井・モード: https://1geki.jp/slot/s_jajamarukun_ha/3/
