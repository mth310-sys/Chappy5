# スマスロリノヘブン

recordNo: 1536
machineName: スマスロリノヘブン
manufacturer: 山佐（製造） / 山佐ネクスト（販売・発表）
formalModel: LアナザーリノヘブンCC
inspectionCode: 2S0866
releaseDate: 2022-11-21
generation: 6.5号機 / スマートパチスロ初期 / コンプリート機能搭載
systemType: AT / 完全告知・擬似ボーナス連チャンタイプ

## payoutRateBySetting
- 設定L: 公表値なし
- 設定1: 97.5%
- 設定2: 98.5%
- 設定4: 102.3%
- 設定5: 104.9%
- 設定6: 107.3%

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当たり
- 設定1: 1/252.9
- 設定2: 1/245.5
- 設定4: 1/231.9
- 設定5: 1/216.1
- 設定6: 1/202.6

### ボーナスTOTAL
- 設定1: 1/117.5
- 設定2: 1/114.3
- 設定4: 1/108.5
- 設定5: 1/101.8
- 設定6: 1/96.0

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.0G/50枚（設定1）。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナス: 約3.2枚/G。

信頼度: OFFICIAL_ANNOUNCEMENT / INDUSTRY / MULTI_SOURCE_MATCH

## basicPayout
- BIG: 65G、平均約208枚。
- REG: 20G、平均約64枚。
- ボーナス消化中のヘブンランプ点灯でBIG 1G連。
- 天国系は32G以内連チャン。天国約75%、超天国A約80%、超天国B約90%、裏天国約90%ループ。裏天国は当選ボーナスがすべてBIG。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は毎ゲーム抽選と規定ゲーム数の両方でボーナスを抽選。
- 通常A / 通常B / 裏通常A / 裏通常Bの通常系、引き戻し、保証、チャンス、天国 / 超天国A / 超天国B / 裏天国を搭載。
- 通常A・通常B・裏通常A・裏通常Bの天井は999G。
- 引き戻し / チャンスの天井は200G。
- 保証 / 天国 / 超天国A / 超天国B / 裏天国は32G天井。
- 通常系は天国移行まで基本的にモードダウンなし。
- 有利区間リセット後は裏天国51.2%という強い再移行抽選を持つが、これは設定変更時の朝一モード振り分けとは別抽選として分離する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_DISTRIBUTION_AND_UNVERIFIED_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部状態RESET。
- モードRESET / 再抽選。
- 設定変更時専用のモード振り分けが公開されている。
- 開始ステージは昼ステージとする解析あり。

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態・モードをCARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井までのゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態は据え置き契約に従いCARRY_OVERとする解析が複数系統で一致。
- 表示上の開始ステージは昼ステージへ戻るとする解析あり。

### gameCounterReset
- 設定変更: 天井ゲーム数RESET。
- 据え置き / 純電断: 天井ゲーム数CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の一律固定天井短縮ではなく、設定変更時のモード再抽選で40.0%のチャンスモードを選択した場合に天井200Gとなる。
- 設定変更時の通常A / 通常B / 裏通常A / 裏通常B選択時は999G天井。
- 「設定変更時は必ず200G天井」とは扱わない。

### modeAfterReset
設定変更時モード振り分け（全設定共通）:
- 通常A: 49.2%
- 通常B: 10.0%
- チャンス: 40.0%
- 裏通常A: 0.4%
- 裏通常B: 0.4%

- 合計50.8%で通常A以外（チャンス / 通常B / 裏通常A / 裏通常B）へ移行。
- チャンスモードは設定変更後のみ移行する可能性がある朝一専用性の高いモードで、200G天井かつ次回通常B以上が確定。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電断: CARRY_OVER。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き / 純電断: CARRY_OVER。
- 稼働中は差枚数1750〜2000枚以上の規定到達後のボーナス当選を契機に有利区間リセット抽選。
- 有利区間移行時のモード振り分けは通常A28.0% / 通常B5.0% / 引き戻し15.0% / 裏通常A0.4% / 裏通常B0.4% / 裏天国51.2%。これは設定変更時振り分けとは別系統。

### resetBenefits
- 設定変更時は50.8%で通常A以外へ移行。
- チャンスモード選択率40.0%。チャンス滞在時は200G天井、次回通常B以上確定。
- チャンス滞在時を天国移行まで打ち切った場合の公開機械割は設定1 103.7% / 2 104.7% / 4 107.4% / 5 110.9% / 6 114.3%。ホール経営ゲーム上の朝一客行動へ影響する公開数値として保存。

### resetPenalties
- 前日の天井ゲーム数、モード、内部状態を失う。
- 設定変更専用の追加不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 解析上、設定変更か据え置きかは見た目では判別不可。
- 朝一200G以内のボーナス当選はチャンスモード滞在の期待が上がるが、設定変更確定判別にはならない。
- 本機固有のリールガックン条件・発生率は `スマスロリノヘブン / リノヘブン / LアナザーリノヘブンCC / 山佐 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール` を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時: 通常A 49.2% / 通常B 10.0% / チャンス 40.0% / 裏通常A 0.4% / 裏通常B 0.4%。
- 設定変更時の通常A以外合計: 50.8%。
- チャンスモード天井: 200G。
- 通常A / 通常B / 裏通常A / 裏通常B天井: 999G。
- チャンス滞在時の公開機械割: 設定1 103.7% / 2 104.7% / 4 107.4% / 5 110.9% / 6 114.3%。
- 稼働中の有利区間移行時: 裏天国51.2%。

### publicMorningNumbers
- 朝一設定変更時チャンスモード: 40.0%。
- 朝一設定変更時通常B: 10.0%。
- 朝一設定変更時裏通常A / 裏通常B: 各0.4%。
- 朝一設定変更時通常A以外合計: 50.8%。
- チャンスモード天井: 200G。
- 通常系最大天井: 999G。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スマスロリノヘブン / リノヘブン / RINO HEAVEN / LアナザーリノヘブンCC / 山佐 / 山佐ネクスト` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / ガックン / 有利区間 / 判別` を組み替えて再探索。
- 山佐発表を引用する業界記事、遊技日本、遊技通信、Amusement Japan、グリーンべると、PiDEA、P-WORLD、パチマガスロマガ、なな徹、必勝本系、当時解析を横断。
- 型式 `LアナザーリノヘブンCC` は複数業界資料で一致。東京都公安委員会検定通過情報の再掲で検定番号 `2S0866` を確認。
- 設定変更時のモード振り分けはなな徹と複数解析系で一致。
- 本機固有ガックンは十分な再探索後も直接資料を固定できなかったためUNVERIFIED。

## conflicts
- 一部の二次ブログに設定2機械割98.6%表記があるが、営業資料系・P-WORLD・必勝本系・複数解析は98.5%で一致するため98.5%をcanonicalとし、98.6%は転記/丸め差候補としてCONFLICT保持。
- 2022年9月時点の業界発表は11月下旬予定とする資料がある一方、実導入記事および当時のスマスロ稼働開始資料では2022-11-21で一致。canonicalは実導入日2022-11-21。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13

1. 遊技日本 — スマスロ初の沖タイプ！「スマスロリノヘブン」機種情報公開
   https://news.p-world.co.jp/articles/21712/nippon
2. 遊技日本 — 「スマスロリノヘブン」基本スペック
   https://news.p-world.co.jp/articles/21774/nippon
3. 遊技通信 — スマスロ初の沖タイプ！「スマスロリノヘブン」
   https://news.p-world.co.jp/articles/21751/yugitsushin
4. Amusement Japan — 山佐ネクストがスマスロ新機種発表
   https://amusement-japan.co.jp/article/detail/10003044/
5. グリーンべると — 11/21新台『スマスロリノヘブン』
   https://news.p-world.co.jp/articles/22283/greenbelt
6. グリーンべると — 山佐ネクスト、スマスロ第1弾『スマスロリノヘブン』をリリース
   https://news.p-world.co.jp/articles/21956/greenbelt
7. PiDEA — 東京都公安委員会、新台検定通過状況（2022-09-20）
   https://www.pidea.jp/articles/1663809222
8. P-WORLD — スマスロリノヘブン
   https://www.p-world.co.jp/machine/database/9721
9. なな徹 — 朝一・設定変更時の挙動/有利区間について
   https://nana-press.com/kaiseki/machine/466/12472/
10. パチマガスロマガ — 通常時の内部モード
   https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/10/tj04-1.php
11. パチスロ必勝本 — スマスロリノヘブン 基本スペック・天井
   https://p.hisshobon.jp/vpage/2494/2
12. フィールド・サービス — Lアナザーリノヘブン 営業資料/スペック
   https://www.fieldservice.store/business-topics/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%80%8Cl%E3%82%A2%E3%83%8A%E3%82%B6%E3%83%BC%E3%83%AA%E3%83%8E%E3%83%98%E3%83%96%E3%83%B3%E3%80%8D%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E6%83%85%E5%A0%B1-%E5%96%B6
13. スロパチクエスト — 朝一設定変更・電源OFF/ON
   https://www.slopachi-quest.com/article/reno-heven-tenjou/

status: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_DISTRIBUTION_AND_UNVERIFIED_GACKUN
