# デジスロ JAC IN バージョン

recordNo: 1600
machineName: デジスロ JAC IN バージョン
manufacturer: ベルコ
formalModel: SデジスロジャックGB1
inspectionCode: 3S0649
releaseDate: 2023-11-06
generation: 6.5号機 / メダル機
systemType: AT / 疑似ボーナス主体（ノーマルタイプ風）
settings: L / 1 / 2 / 3 / 4 / 6

## payoutRateBySetting
- 設定1: 98.0%
- 設定2: 99.6%
- 設定3: 101.5%
- 設定4: 104.1%
- 設定6: 106.6%
- 設定L: 公開機械割未確認
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### BIG
- 設定1: 1/386.1
- 設定2: 1/367.8
- 設定3: 1/348.7
- 設定4: 1/324.9
- 設定6: 1/304.0

### REG
- 設定1: 1/388.9
- 設定2: 1/373.5
- 設定3: 1/356.9
- 設定4: 1/335.3
- 設定6: 1/316.2

### ボーナス合算
- 設定1: 1/193.7
- 設定2: 1/185.3
- 設定3: 1/176.4
- 設定4: 1/165.0
- 設定6: 1/155.0
信頼度: OFFICIAL（合算設定6） / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約37G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 疑似ボーナスAT: 約5.8枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG: 20G+JACゲーム構成、平均獲得約360枚。
- JAC IN: 約1/7.3。JACゲームはベルorスイカナビ6回まで、1セット約51枚。
- JAC IN 4回達成ごとにEXゲーム+10G。
- BIG中JAC IN 0回で終了した場合はBIG 1G連濃厚。
- REG: ベルorスイカナビ12回まで、平均獲得約100枚。
- ボーナス比率: BIG約55% / REG約45%。
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲーム成立役に応じて疑似ボーナス抽選。小役連続で当選期待度が上昇。
- 天井機能は非搭載。
- 設定L搭載。デモ画面表示中の下パネル点滅が設定L濃厚挙動として公開。
- コンプリート機能搭載。打ち止め状態は設定変更で解除。
信頼度: OFFICIAL / ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS_WITH_UNVERIFIED_GAPS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更によりコンプリート機能の打ち止め状態が解除されることは公開資料で確認。
- 通常時の内部状態・小役連続状態・疑似ボーナス抽選状態について、設定変更時の機種固有初期化契約を明記した高信頼公開資料は確認できず UNVERIFIED_AFTER_RESEARCH。
- 「デジスロ JAC IN バージョン / SデジスロジャックGB1 / ベルコ / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 有利区間」でメーカー、業界、主要解析、旧DB系を再探索したが固定値なし。
信頼度: OFFICIAL/ANALYSIS_HIGH（コンプリート解除） / UNVERIFIED（内部状態）

### carryOverBehavior
- 据え置き時の内部状態、小役連続判定、その他朝一状態の機種固有CARRY_OVER契約は公開高信頼資料を確認できず UNVERIFIED_AFTER_RESEARCH。
- 天井非搭載のため宵越し天井ゲーム数の引継ぎは NOT_APPLICABLE。
信頼度: UNVERIFIED

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONのみの場合の内部状態・有利区間・小役連続状態について、機種固有の明示資料を確認できず UNVERIFIED_AFTER_RESEARCH。
- 一般的な6.5号機仕様からの推定は行わない。
信頼度: UNVERIFIED

### gameCounterReset
- 天井非搭載のため、天井狙いに用いる内部ゲーム数カウンタ契約は NOT_APPLICABLE。
- 通常時の小役連続判定はゲーム数天井カウンタとは別概念。
信頼度: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時天井: 非搭載。
- 設定変更後専用の短縮天井: なし / NOT_APPLICABLE。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 朝一専用の規定G数モード、設定変更専用モード振り分け等の公開情報は確認できず PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 本機は通常時の成立役と小役連続を軸に疑似ボーナス抽選を行う構造で、主要解析に天井モードは掲載されていない。
信頼度: ANALYSIS_HIGH（ゲーム構造） / UNVERIFIED（朝一専用状態）

### stateAfterReset
- 設定変更時の内部状態初期振り分け、据え置き/純電源OFF→ON時の状態引継ぎについて公開固定値なし。
- 主要解析の朝一リセット恩恵欄も調査中のままであり、推定値は採用しない。
信頼度: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- 本機固有資料として、設定変更/据え置き/純電断の各条件で有利区間の扱いを直接明記する公開高信頼ソースは今回固定できず UNVERIFIED_AFTER_RESEARCH。
- 一般的な規則からの自動補完は行わない。
信頼度: UNVERIFIED

### resetBenefits
- 設定変更でコンプリート機能の打ち止め状態が解除される。
- 朝一専用の当選率上昇、短縮天井、専用モード、CZ優遇等は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: OFFICIAL/ANALYSIS_HIGH（コンプリート解除） / UNVERIFIED（その他）

### resetPenalties
- 天井非搭載のため、設定変更による宵越し天井消去の不利は NOT_APPLICABLE。
- 設定変更固有の公開ペナルティ数値は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（追加数値）

### resetDetection
- 設定Lはデモ画面表示中の下パネル点滅で判別可能だが、これは設定変更/据え置き判別ではなく設定L判別。
- 設定変更/据え置きを判別する機種固有のガックン、開始ステージ、表示、朝一ゲーム数挙動は再探索後も固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（設定L表示） / UNVERIFIED（変更判別）

### numericResetData
- 通常天井: 非搭載。
- 設定変更後短縮天井: なし / NOT_APPLICABLE。
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一専用初当り/CZ数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 公開比較可能な朝一専用数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 通常時天井: 非搭載。

## conflicts
- 重大な性能コア数値CONFLICTは今回確認せず。
- 一部サイトの「朝一リセット恩恵 調査中」は未確定情報であり、恩恵ありと解釈しない。

## missingFields
- 設定Lの機械割・初当り。
- 設定変更/据え置き/純電源OFF→ON時の機種固有内部状態契約。
- 有利区間の各条件別明記。
- 設定変更判別用ガックン等の機種固有挙動。
- 公開朝一専用数値。

## sources
取得日: 2026-09-13
- ベルコ公式 製品ページ: https://www.s-bellco.co.jp/products/slot/digislojac/
- ベルコ公式 発売リリース: https://www.s-bellco.co.jp/news/20230908_01/
- 遊技日本/P-WORLD 業界記事（型式・ゲーム性）: https://news.p-world.co.jp/articles/25412/nippon
- 遊技通信/P-WORLD 東京都公安委員会検定通過（型式・検定番号）: https://news.p-world.co.jp/articles/25162/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9905
- なな徹 基本スペック: https://nana-press.com/kaiseki/machine/643/16916/
- なな徹 機種解析TOP: https://nana-press.com/kaiseki/machine/643/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/199675/
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/111/kh01.php
- パチマガスロマガ BIG詳細: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/111/bn02.php
- 必勝本 システム解説: https://p.hisshobon.jp/vpage/2568/4
- 一撃 オンライン遊技説明: https://1geki.jp/slot/s_digislo_jacin/39/

## status
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS_WITH_UNVERIFIED_GAPS
