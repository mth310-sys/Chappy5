# スマスロニューパルサーBT

recordNo: 1734
machineName: スマスロニューパルサーBT
aliases: ニューパルサーBT / スマスロ ニューパルサーBT / LBニューパルサーBTC9
manufacturer: 山佐（製造） / 山佐ネクスト（販売）
formalModel: LBニューパルサーBTC9
inspectionCode: 430949
releaseDate: 2025-06-02
generation: 6.5号機 / スマスロ / ボーナストリガー
systemType: ノーマル / リアルボーナス + BT（ボーナストリガー）
settings: 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 遊技日本・情報島の検定通過記事で型式 `LBニューパルサーBTC9`、メーカー山佐を確認。
- P-WORLD/HAZUSE系機種DBで検定番号 `430949`、型式 `LBニューパルサーBTC9`、導入開始2025-06-02を確認。
- 山佐ネクスト発表を扱う日刊スポーツ、Amusement Japan/遊技通信系業界記事でも2025-06-02導入予定、山佐製を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.7%（完全攻略100.0%）
- setting2: 100.1%（完全攻略101.5%）
- setting5: 103.0%（完全攻略104.5%）
- setting6: 106.8%（完全攻略108.3%）
initialHitBySetting:
  big:
  - setting1: 1/366.1
  - setting2: 1/346.8
  - setting5: 1/332.7
  - setting6: 1/312.1
  reg:
  - setting1: 1/366.1
  - setting2: 1/346.8
  - setting5: 1/332.7
  - setting6: CONFLICT_1/312.1_VS_1/312.2
  combined:
  - setting1: 1/183.1
  - setting2: 1/173.4
  - setting5: 1/166.3
  - setting6: 1/156.0
baseGamesPer50: 約39G（設定1）
netIncrease: NOT_APPLICABLE_FIXED_NET_INCREASE（リアルボーナス主体。BTはボーナス高確率状態）
basicPayout:
- BIG BONUS: 最大203枚 + 終了後BTへ必ず移行
- REG BONUS: 最大107枚、終了後通常時へ移行
- BIG初当りからBTを含む平均獲得: 約359枚（設定1）
- BT中BIG当選時はBT継続、REG当選時はBT終了
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- BIG/REG比率は初当り時、全設定共通1:1。
- BIG終了後にBT（ボーナス高確率状態）へ必ず移行し、次のBIGまたはREG成立まで継続。
- BT中にBIGなら再度BT、REGなら通常へ戻る。
- 天井機能は非搭載。
- CZ/AT、ゲーム数天井、通常時の朝一モード狙いを前提とする機種ではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_NOT_APPLICABLE_FIELDS_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井・CZ・AT・ゲーム数モードを持たないノーマル+BT機のため、それらに対する設定変更リセット契約はNOT_APPLICABLE。
- P-WORLD機種情報ではコンプリート機能による打ち止め状態は設定変更で解除されることを確認。
- 設定変更時だけ適用される専用朝一モード、初当り優遇、短縮天井、朝一固定高確等の機種固有公開情報は、正式型式・メーカー・シリーズ名を含めて再探索したが確認できなかった。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_AND_COMPLETION_RESET / NONE_CONFIRMED_AFTER_RESEARCH_FOR_DEDICATED_MORNING_EFFECT

### carryOverBehavior
- 天井非搭載、通常時ゲーム数モード/CZ/AT状態なしのため、前日天井ゲーム数や通常モードの据え置き引継ぎはNOT_APPLICABLE。
- 据え置き時だけの固有朝一恩恵/不利、内部カウンタ引継ぎに関する公開値は確認できなかった。
- BTはリアルボーナス契機のボーナス高確率状態であり、営業終了時BT中という特殊状況の翌営業再開挙動を直接規定する機種固有公開資料は固定できなかったため、推測転記しない。
confidence: NOT_APPLICABLE_FOR_CEILING_AND_NORMAL_MODE / UNVERIFIED_FOR_SPECIAL_INTERRUPTED_BT_CASE

### powerCycleBehavior
- 必勝本の「設定変更・電源OFF/ON」比較では、天井は搭載なし、リールガックンは設定変更・電源OFF/ON双方とも「現在調査中」。
- 純電源OFF→ONだけで発生する専用朝一モード/天井変更/数値恩恵を示す機種固有資料は、検索語・資料系統を変えても確認できなかった。
- 天井/通常モード/CZ/ATゲーム数の引継ぎは構造上NOT_APPLICABLE。BT中電断の直接挙動はUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_DIRECT_COMPARISON_TABLE / UNVERIFIED_AFTER_RESEARCH_FOR_INTERRUPTED_BT_POWER_CYCLE

### gameCounterReset
- 天井ゲーム数カウンタ: NOT_APPLICABLE（天井非搭載）。
- 朝一狙いに用いる規定ゲーム数カウンタ: NOT_APPLICABLE_CONFIRMED_FOR_PUBLIC_GAME_STRUCTURE。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
ceilingBenefit: NOT_APPLICABLE
- P-WORLD、必勝本、複数解析資料で天井非搭載を照合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等のゲーム数モード、朝一専用モードは本機の公開ゲーム構造上NOT_APPLICABLE。
- 設定変更専用のモード振り分け公開値はNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- CZ/ATの通常時高確・低確のような朝一状態再抽選は本機の公開ゲーム構造上NOT_APPLICABLE。
- リアルボーナス/BT内部状態をまたぐ特殊電断時の直接仕様は公開資料を固定できずUNVERIFIED_AFTER_RESEARCH。
confidence: NOT_APPLICABLE_FOR_NORMAL_MORNING_STATE / UNVERIFIED_FOR_INTERRUPTED_BT

### advantageousSectionReset
- 本機固有の設定変更/据え置き/純電断時における有利区間の扱いを明記した高信頼公開資料は、`スマスロニューパルサーBT / LBニューパルサーBTC9 / 山佐 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 有利区間` を組み替えて再探索したが固定できなかった。
- ノーマル+BTというゲーム構造だけから有利区間挙動を推測しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 設定変更専用の短縮天井、朝一専用モード、高確スタート、当選率優遇などはNONE_CONFIRMED_AFTER_RESEARCH。
- コンプリート機能の打ち止め状態は設定変更で解除。
confidence: NONE_CONFIRMED_AFTER_RESEARCH / ANALYSIS_HIGH_FOR_COMPLETION_RESET

### resetPenalties
- 設定変更で失われる前日天井進行やモード進行は天井/ゲーム数モード非搭載のためNOT_APPLICABLE。
- 設定変更朝一固有の公開された冷遇率・不利モード・初当り低下はNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 必勝本の機種別比較表でリールガックンは設定変更・電源OFF/ONとも「現在調査中」。
- 機種名、正式型式 `LBニューパルサーBTC9`、山佐/山佐ネクスト、ニューパルサーシリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン/リールガックン` を組み替えて再探索したが、設定変更を確定/高精度推測できる本機固有ガックン条件・発生率は固定できなかった。
- 天井非搭載のため「朝一○G超えで据え置き判別」のような天井利用判別はNOT_APPLICABLE。
confidence: ANALYSIS_HIGH_FOR_CURRENTLY_UNDER_RESEARCH_TABLE / UNVERIFIED_AFTER_RESEARCH_FOR_GAKKUN

### numericResetData
normalMaximumCeiling: NOT_APPLICABLE
resetMaximumCeiling: NOT_APPLICABLE
resetModeDistribution: NOT_APPLICABLE_PUBLIC_GAME_STRUCTURE
resetMorningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetGakkunRate: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 設定6 REG確率は、なな徹・P-WORLD等が `1/312.1`、必勝本が `1/312.2` と掲載。平均化せず `CONFLICT_1/312.1_VS_1/312.2` として保持する。設定6合算はいずれも1/156.0で一致。
- 必勝本の基本ページ上部に一時的に「天井 搭載」と表示される箇所がある一方、同ページの天井&設定変更表は到達条件「ナシ」、本文も「天井は搭載ナシ」。P-WORLD、複数解析資料も天井非搭載で一致するため、canonicalは天井非搭載。上部表示はページテンプレート/表示矛盾として注記する。

## missingFields
- BT中の純電源OFF→ON/営業跨ぎの内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の有利区間直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一関連数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-70689/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-4992/
- 日刊スポーツ 新機種発表: https://www.nikkansports.com/amusement/pachislot/news/202503270001227.html
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004792/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10254
- 必勝本 基本スペック/天井&設定変更: https://p.hisshobon.jp/vpage/2700/2
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86888/
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/86890/
- 必勝本 小役/コイン持ち: https://hisshobon.com/machineinfo/86876/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/960/28919/
- 1geki 基本: https://1geki.jp/slot/lb_newpulsar/39/
- 1geki BT: https://1geki.jp/slot/lb_newpulsar/63/
- HAZUSE/P-WORLD転載機種情報: https://www.p-world.co.jp/machine/database/10254
- 評論計画 型式/概要: https://pachireview.com/slot/new-pulsar-bt/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/234556/
- 6確: https://www.kaku6.jp/slot/newpulsarbt/
