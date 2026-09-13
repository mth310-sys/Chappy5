# スマスロ とある魔術の禁書目録

recordNo: 1601
machineName: スマスロ とある魔術の禁書目録
manufacturer: JFJ（藤商事グループ）
formalModel: Lとある魔術の禁書目録JC
inspectionCode: 3S0728
releaseDate: 2023-11-06
generation: 6.5号機 / スマスロ
systemType: AT / CZ突破型・差枚数管理
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.9%
- 設定3: 100.7%
- 設定4: 105.5%
- 設定5: 109.5%
- 設定6: 114.9%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### CZ「BREAK BATTLE」
- 設定1: 1/191.6
- 設定2: 1/188.4
- 設定3: 1/181.0
- 設定4: 1/161.1
- 設定5: 1/152.6
- 設定6: 1/146.7
信頼度: ANALYSIS_HIGH

### AT「幻想殺し（イマジンブレイカー）RUSH」
- 設定1: 1/370.7
- 設定2: 1/360.9
- 設定3: 1/343.6
- 設定4: 1/301.3
- 設定5: 1/278.0
- 設定6: 1/266.5
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約34G/50枚
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- メインAT「幻想殺しRUSH」: 約2.7枚/G
- 上位AT「ULTIMATE LOOP」: 約4.1枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT初当り時は7種類の上乗せ特化ゾーン「幻想BURST」から開始し、初期差枚数を決定。
- 幻想BURSTの平均上乗せは種類により約190〜600枚。最上位のインデックスは約1000枚級。
- メインATは差枚数管理型、純増約2.7枚/G。
- エンディング後CZ成功で「ULTIMATE LOOP」へ。純増約4.1枚/Gとなり、幻想BURST「一方通行」or「インデックス」から開始する。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はレア役・規定ゲーム数を契機にCZ「BREAK BATTLE」を目指し、CZ成功がATの主ルート。
- 規定ゲーム数に関与する内部モードは通常A / 通常B / チャンスA / チャンスBの4種類。
- モード別天井: 通常A 999G+α / 通常B 999G+α / チャンスA 600G+α / チャンスB 200G+α。
- 最大999G+α到達で勝利濃厚CZを経由しATへ。
- 有利区間リセットは設定変更時とエンディング終了後に確認されている。設定変更以外の有利区間リセット後恩恵（ULTIMATE LOOP CZ）は朝一設定変更恩恵とは分離して扱う。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 有利区間: RESET。
- 天井/内部ゲーム数: RESET。
- 内部状態: RESET。
- 内部モード: RESET後に再抽選。通常Aは選択されず通常B以上濃厚。
- 異能キャラ: RESET。
- 異能ポイント: 0ptへRESET。
- 朝一ステージは「当麻の部屋」。
- 当麻の部屋からビーチステージへ移行した際に異能キャラを1人獲得する解析あり。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間 / 天井 / 内部状態 / モードをCARRY_OVER。
- 朝一表示ステージは設定変更時と同じ「当麻の部屋」のため、開始画面単独では変更判別不可。
- 据え置きの異能キャラ・異能ポイントについては、純電断比較資料で内部引継ぎが確認されるため電源再投入後も内部的に保持される。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONのみでは、有利区間 / 天井 / 内部状態 / 内部モードをCARRY_OVER。
- 異能キャラは内部的にCARRY_OVER。
- 異能ポイントも内部的にCARRY_OVER。
- 表示ステージは「当麻の部屋」から開始する。
信頼度: ANALYSIS_HIGH / DIRECT_COMPARISON_TABLE

### gameCounterReset
- 設定変更: 天井ゲーム数RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大天井: 999G+α。
- 設定変更後も通常Bが67.2%選択されるため、固定の短縮天井は存在しない。最大999G+αの可能性あり。
- ただしチャンスA選択時は600G+α、チャンスB選択時は200G+αとなり、約3割で実質的な天井短縮が発生する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は全設定共通でモードB以上へ再抽選。
- 通常A: 0%
- 通常B: 67.2%
- チャンスA: 12.5%
- チャンスB: 20.3%
- チャンスA+B合計: 32.8%。
- 据え置き / 電源OFF→ONのみ: モードCARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVER。
- 設定変更後の通常/高確等の具体的初期振り分け率は、検索語・資料系統を変えて再探索したが公開固定値を確認できず PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（挙動） / UNVERIFIED（初期振り分け数値）

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVER。
- 有利区間ランプから設定変更/据え置きを判別することはできない。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更後は通常Aを否定し、通常B以上濃厚。
- 32.8%でチャンスA/Bが選択され、チャンスAなら600G+α、チャンスBなら200G+αが最大天井となる。
- 当麻の部屋からビーチ移行時に異能キャラ1人獲得の解析あり。
- 固定天井短縮ではなく「モード優遇型」の朝一恩恵。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 据え置き時に保持される前日モード・天井進行・異能キャラ・異能ポイントは設定変更で消去されるため、前日条件が有利な場合はリセットが不利になり得る。
- 朝一専用の定量的ペナルティ率は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（消去対象） / UNVERIFIED（定量値）

### resetDetection
- 設定変更・据え置きとも「当麻の部屋」開始のため、開始ステージ単独では判別不可。
- 有利区間ランプによる変更判別不可。
- 設定変更後は通常B以上濃厚なので、当麻の部屋移行演出などモード示唆は統計的な推測材料になるが、単独で設定変更確定とはならない。
- 本機固有のリールガックン条件・発生率は「機種名/型式/JFJ/藤商事/朝一/設定変更/据え置き/ガックン」で資料系統を変えて再探索したが高信頼固定情報を確認できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（ステージ・ランプ） / UNVERIFIED（ガックン）

### numericResetData
- 設定変更時モード振り分け（全設定共通）: 通常B 67.2% / チャンスA 12.5% / チャンスB 20.3%。
- チャンスモード合計: 32.8%。
- モード別最大天井: 通常B 999G+α / チャンスA 600G+α / チャンスB 200G+α。
- 設定変更後専用の固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH（通常B選択時は999G+α）。

### publicMorningNumbers
- 通常B: 67.2%
- チャンスA: 12.5%
- チャンスB: 20.3%
- 600G+α以内となるチャンスA/B合計: 32.8%。
- 200G+α以内となるチャンスB: 20.3%。

## conflicts
- AT初当り設定3は、JFJ公式・業界記事で 1/343.6、HAZUSE/P-WORLD転記系で 1/343.9 の表記差あり。公式/業界一次寄りの 1/343.6 をcanonical採用し、1/343.9を CONFLICT_SECONDARY_VALUE_OR_TRANSCRIPTION として保持。平均化しない。
- 「天井恩恵」をAT当選と直接表記する資料と「勝利濃厚CZを経由してAT」とする資料がある。ゲーム結果は同等だが定義を混ぜず、本レコードでは後者を構造説明として採用。

## missingFields
- 設定変更時の通常/高確等、内部状態初期振り分け率。
- 本機固有のリールガックン条件・発生率。
- 設定変更に伴う定量的な不利要素。

## sources
取得日: 2026-09-13
- JFJ公式 製品ページ（AT初当り）: https://www.fujimarukun.co.jp/products/l_toaru/
- 遊技日本/P-WORLD 発売記事（型式・AT初当り・出玉率・導入）: https://news.p-world.co.jp/articles/25480
- 遊技通信/P-WORLD 発表記事（型式・ゲーム性・純増）: https://news.p-world.co.jp/articles/25462/yugitsushin
- グリーンべると 検定通過（型式）: https://web-greenbelt.jp/post-75380/
- HAZUSE（検定番号・性能・設定変更/電源OFF→ON比較・天井）: https://hazuse.com/machine/pachislot/3S0728/
- P-WORLD機種DB（設定変更/電源OFF→ON比較）: https://www.p-world.co.jp/machine/database/9913
- なな徹 朝一/設定変更・据え置き: https://nana-press.com/kaiseki/machine/608/17552/
- なな徹 モード: https://nana-press.com/kaiseki/machine/608/17556/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/608/17553/
- 一撃 天井・設定変更: https://1geki.jp/slot/l_toaru_index/3/
- 一撃 モード: https://1geki.jp/slot/l_toaru_index/42/
- パチ7 設定推測/基本スペック: https://pachiseven.jp/articles/detail/19136
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2569/2
- スロットセブン 朝一比較: https://slot-seven.com/toaru-tenzyou/

## status
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
