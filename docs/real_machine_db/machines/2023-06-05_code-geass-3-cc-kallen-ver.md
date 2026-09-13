# パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver.

recordNo: 1569
machineName: パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver.
manufacturer: ロデオ製造 / サミーブランド・販売
formalModel: S コードギアス3C.C. FS
inspectionCode: 2S1060
releaseDate: 2023-06-05
generation: 6.5号機 / メダル機
systemType: A+AT / リアルボーナス+現状維持型AT（GAT） / 技術介入あり
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
### 市場掲載値
- 設定1: 98.2%
- 設定2: 99.2%
- 設定3: 101.5%
- 設定4: 104.5%
- 設定5: 107.5%
- 設定6: 110.4%

### 完全攻略時
- 設定1: 100.1%
- 設定2: 101.1%
- 設定3: 103.6%
- 設定4: 106.8%
- 設定5: 110.0%
- 設定6: 113.1%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当り合算
- 設定1: 1/198.0
- 設定2: 1/193.9
- 設定3: 1/184.6
- 設定4: 1/169.8
- 設定5: 1/157.9
- 設定6: 1/148.9

### HBB+BB
- 設定1: 1/329.3
- 設定2: 1/321.3
- 設定3: 1/306.2
- 設定4: 1/295.2
- 設定5: 1/281.3
- 設定6: 1/267.5

### REG
- 設定1: 1/496.5
- 設定2: 1/489.1
- 設定3: 1/464.8
- 設定4: 1/399.6
- 設定5: 1/360.1
- 設定6: 1/336.1

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約34.6G/50枚（設定1基準）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT純増: 約0.1枚/G。
- ボーナス後のATは出玉を大きく増やす主役というより、リアルボーナス間をつなぐ現状維持型の役割。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- HYPER BIG: 最大257枚。最短23G消化。終了後AT150G。
- BIG: 最大204枚（解析資料では約200枚表記もあり）。最短18G消化。終了後AT150G。
- REG（C.C. BONUS / KALLEN BONUS）: 約50枚。終了後AT50G+α。
- AT残り50G以上でREG当選時は、REG後に残りATゲーム数を引き継ぐ。
- 無限ATは次回ボーナスまで継続するが、物差しDBでは契機別詳細抽選を収集しない。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 天井: 非搭載。
- 通常時はリアルボーナス当選を目指し、全ボーナス終了後にATへ突入。
- ATは150G（HBB/BB後）または50G+α（REG後）。
- 技術介入を含む完全攻略時機械割を通常掲載値と分離保持。
- 有利区間について業界資料では「おおよそボーナス毎移行」「シームレス性能 特になし」とする説明があるが、全内部遷移の再現は本DB対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_APPLICABILITY_WITH_POWER_CYCLE_GAPS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- なな徹の本機固有朝一ページでは、設定変更後は「すべての状態がリセット」と明記。
- 一方、そのページ内の設定変更時詳細欄自体は「現在調査中」のままで、個別状態名・振り分けまでは公開固定できない。
- 天井非搭載のため、ゲーム数天井リセット / 短縮恩恵は `NOT_APPLICABLE`。
- 設定変更専用の朝一モード、固定高確、専用初当り優遇は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時の個別内部状態について、本機固有の直接比較表 / 契約を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井は非搭載のため、天井ゲーム数引継ぎは `NOT_APPLICABLE`。
- リアルボーナス+AT機であることから一般的挙動を推測転記しない。

### powerCycleBehavior
- 純電源OFF→ONのみの場合の、成立済みボーナス状態、AT残りゲーム数、内部状態、有利区間の本機固有直接記述は、正式型式・ロデオ・サミーを含む検索語変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きと同じと一般論で補完しない。

### gameCounterReset
- 天井非搭載のため `NOT_APPLICABLE`。
- データ表示器上の通常ゲーム数はホール機器依存であり、内部天井判定対象ではない。

### ceilingAfterReset
- 本機は天井非搭載。
- 設定変更時の短縮天井 / リセット天井: `NOT_APPLICABLE`。

### modeAfterReset
- 朝一専用モード / 天井モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- なな徹は設定変更後に「すべての状態がリセット」とするが、設定変更専用モード振り分け等は未公表。

### stateAfterReset
- 設定変更: 「すべての状態がリセット」とする本機固有解析あり。
- 据え置き / 純電源OFF→ON: 個別内部状態の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 6.5号機A+ATとして有利区間を使用し、業界資料ではおおよそボーナス毎の移行と説明される。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
- 設定変更、据え置き、純電断それぞれの有利区間状態を直接対比した本機固有公開資料は十分な再探索後も固定できず、`PARTIAL_DIRECT_DISCLOSURE` とする。

### resetBenefits
- 設定変更専用の短縮天井: なし（天井自体が非搭載）。
- 設定変更専用のモード優遇 / 朝一初当り率 / CZ優遇: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 公開情報上、朝一客が設定変更だけを理由に追う明確な数値恩恵は確認できない。

### resetPenalties
- 設定変更専用の数値化された不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 前日状態が設定変更でリセットされること自体は確認できるが、個別状態価値を推測しない。

### resetDetection
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
- 本機固有のリールガックン条件 / 発生率は、`コードギアス3 C.C.&Kallen / Sコードギアス3C.C. FS / ロデオ / サミー` と `設定変更 / リセット / 朝一 / 据え置き / ガックン / リール始動` を組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用ステージ、ゲーム数天井、短縮天井を用いた確定判別要素は確認されていない。

### numericResetData
- 天井: 非搭載。
- 設定変更時モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一専用初当り率 / ボーナス率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更専用として公開固定できる朝一関連数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常のボーナス初当りは設定1 1/198.0～設定6 1/148.9だが、これは朝一専用値ではないためreset数値へ混入しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver. / コードギアス3 C.C. / Sコードギアス3C.C. FS / ロデオ / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 有利区間` を組み替えて検索。
- メーカー発表を引用する業界記事、公安委員会検定記事、PiDEA業界分析、一撃、なな徹、パチ＆スロ必勝本、P-WORLD、K-Navi、解析集約 / 回顧系を横断。
- 天井非搭載は一撃、なな徹、P-WORLD、PiDEAで一致。
- 設定変更後「すべての状態がリセット」、有利区間ランプ判別不可はなな徹の本機固有朝一ページで確認。
- 純電断、ガックン、設定変更専用数値恩恵は十分な再探索後も直接固定できず推測補完しない。

## sources
取得日: 2026-09-13

### 公的 / 業界 / メーカー発表系
- PiDEA X 東京都公安委員会検定通過（型式 / 検定番号2S1060）: https://www.pidea.jp/articles/1668388131
- グリーンべると 高知県公安委員会検定通過（型式）: https://web-greenbelt.jp/post-65448/
- P-BOMB サミー発表（ロデオ製造 / GAT / 主要仕様）: https://p-bomb.co.jp/industry/new-machine/6577/
- 一撃 リリース情報（サミー発表 / 主要仕様）: https://1geki.jp/repo/20230316sammy/
- PiDEA X 新台講座（6.5号機 / A+AT / 有利区間・天井概要）: https://www.pidea.jp/articles/1682901942

### 解析 / DB
- なな徹 機種総合: https://nana-press.com/kaiseki/machine/552/
- なな徹 ボーナス確率 / 機械割: https://nana-press.com/kaiseki/machine/552/14240/
- なな徹 朝一・設定変更 / 有利区間: https://nana-press.com/kaiseki/machine/552/15272/
- 一撃 機種解析: https://1geki.jp/slot/s_codegeass3cc/
- 一撃 天井: https://1geki.jp/slot/s_codegeass3cc/3/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2536/2
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9816
- K-Navi 機種DB: https://p-kn.com/slot/3943/
- スロパチクエスト 設定差: https://www.slopachi-quest.com/article/codegeass3-cckallenver-settei/

## missingFields
- 純電源OFF→ON時の個別状態 / AT状態 / 有利区間契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の個別内部状態直接比較: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード振り分け / 朝一専用初当り率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 主要性能コアに重大CONFLICTなし。
- BIG獲得は解析資料に「約200枚」と「最大204枚」があるが、定義差（概算と最大値）でありCONFLICT扱いしない。

coreStatus: COMPLETE_CORE
status: COMPLETE_CORE_RESET_V07_WITH_POWER_CYCLE_GAPS
