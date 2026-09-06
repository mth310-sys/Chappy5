# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **810**
- latestRecordAdded: **パチスロ モンキーターンII**（山佐）— 2014-04-07
- latestRecord: `docs/real_machine_db/machines/2014-04-07_monkey-turn-ii.md`
- chronologicalFrontier: **2014-04-07**
- frontierLatestMachine: **パチスロ モンキーターンII**
- schema: **resetBehavior v0.7**
- status: **2014-04-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2014-04-08_TO_04-20_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH / MONKEY_TURN_II_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコード `2014-04-07_samurai-spirits-kengo-hachiban-shobu.md` を再読。
- INDEXは旧集約（19件表示）のため、README規定どおり **LATEST_HANDOFF + main実レコード** を現在の正本として継続。
- 作業開始時正本は **recordCount 809 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_OPEN**。チャット直前値よりGitHub mainが先行していたためmainを優先。
- 04/07群の残る既知未処理 **パチスロ モンキーターンII（山佐）** がmain未登録（候補パス404）であることを確認し、810件目として追加。
- K-Navi 2014年4月全国一斉導入カレンダーは04/07群を **マタドール-30 / ハッピージャグラーVII / サムライスピリッツ～剣豪八番勝負～ / パチスロ モンキーターンII** の4機として掲載。4機すべて登録済みとなったため **04-07_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 同カレンダー上の次の全国一斉導入日は **2014-04-21**。04/08〜04/20について日付を変えた追加検索も実施し、今回新たな具体日付き未登録5号機を固定できなかったため **04-08_TO_04-20_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 今回追加 — パチスロ モンキーターンII

### identity / 性能コア

- manufacturer: **山佐**。
- hall start: **2014-04-07**（K-Navi / HAZUSE / パチビー）。山佐公式は2014年4月稼働。
- formalModelName: **モンキーターン2TT**。
- inspection number: **4S0051**。
- generation/system: **5号機 / AT / ゲーム数解除 / CZ / シナリオ継続**。
- payout: **97.3 / 98.4 / 100.5 / 104.0 / 107.8 / 112.5%**。
- AT「SG RUSH」初当たり: **1/294.1 / 284.9 / 266.4 / 254.6 / 237.2 / 223.5**。
- CZ「超抜チャレンジ」出現率: **1/373.6 / 373.5 / 333.1 / 311.8 / 277.3 / 268.9**。
- baseGamesPer50: **約31G/50枚**。
- netIncrease: **約2.3枚/G**。
- basic AT: **初回50G+α / 2セット目以降40G+α**。
- ceiling: 通常A **999G+前兆（表示最大1024G）** / 通常B **704G** / 天国 **128G** / 設定変更リセット **512G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFIRMED_RESET_MODE_AND_CARRYOVER**。

### resetBehavior v0.7

- settingChangeBehavior: **設定変更時は専用リセットモードへ移行**。
- modeAfterReset: HAZUSE解析で **全設定共通 リセットモード100%**。
- gameCounterReset: **RESET_ON_SETTING_CHANGE**。前日通常モード進捗を継続せず専用規定G管理へ。
- ceilingAfterReset: **512G**。通常A最大999G+前兆から大幅短縮。
- carryOverBehavior: **据え置き時は天井G・モードを引き継ぐ**とする本機固有朝一解析を確認。
- powerCycleBehavior: **設定変更を伴わない電源OFF→ONでは天井・モード引継ぎ**とする機種別比較表を確認。
- stateAfterReset: リセットモードとは別レイヤーの低確/高確等の具体的初期状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **天井512G短縮**。
- resetPenalties: 通常A最深部999G以降の「次回天国」恩恵をリセット512G最深部には付与しないとする実戦解析あり。メーカー公表ではないため `ANALYSIS_SINGLE_PERIOD_PRACTICAL`。
- resetDetection: **朝一1G目ガックン / 126〜128Gでフェイク前兆終了 / 128G以内に優出モード2回**が設定変更推測シグナルとして当時資料に掲載。いずれも確定契約ではなく `PROBABILISTIC / OBSERVATIONAL_SIGNAL`。
- 据え置き側では、前日128Gヤメ等の条件下で朝一70G付近からのガセ前兆が据え置き推測材料とする当時資料あり。
- publicMorningNumbers: リセット天井 **512G**。実戦値A **1〜128G 37.5% / 129〜256G 0% / 257〜384G 25.0% / 385〜512G 37.5%**。パチマガスロマガ実戦値B **42.11 / 10.53 / 21.05 / 26.32%、平均232.92G**。同ページ本文には128G以内37.5%表記もあり、**CONFLICT_PRACTICAL_RESET_ZONE_SAMPLES**として平均せず保持。

## safeguards / definitions

- 通常天井「999G+前兆」と最大表示「1024G」は同一仕様の表現差。固定1024G解除と混同しない。
- 512Gは設定変更時専用リセットモード天井であり、通常B704G・天国128Gとは別契約。
- 朝一ゾーンの37.5%系列と42.11%系列は母集団/時点の異なる実戦サンプルで、解析上の真の振り分け率として平均しない。
- ガックン/前兆挙動は設定変更推測材料であり、単独100%確定としない。
- スマスロ「モンキーターンV」やモンキーターンIII/IVのリセット情報を本機へ混入しない。

## 2014-04-07群

- 処理済み: **マタドール-30 / ハッピージャグラーVII / サムライスピリッツ～剣豪八番勝負～ / パチスロ モンキーターンII**。
- 未処理: **なし（current research）**。
- status: **GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## 2014-04-08〜04-20境界

- K-Navi全国一斉導入カレンダーでは04/07の次のパチスロ掲載日は **04/21**。
- 04/08、04/14、04/15、04/20等を含め導入/新台/パチスロで追加探索したが、今回この境界に具体日付き未登録5号機を固定できず。
- status: **BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 次の2014-04-21群（K-Navi確認済み）

1. **喧嘩祭**（KPE）
2. **マジックモンスター3 ぶっちぎり!魔界グランプリ**（オリンピア）
3. **緑ドンVIVA2**（エレコ）
4. **ニューペガサス**（エマ）

## 遡及 resetBehavior QA

- 次の遡及QAカーソルは従来どおり **`docs/real_machine_db/machines/2007-02_skylove.md`**。
- 新規時系列キューを止めず、QAリレー時に継続する。

## 次回再開地点

1. **recordCount 810 / chronologicalFrontier 2014-04-07 / 04-07_GROUP_CLOSED / 04-08〜04-20_BOUNDARY_CLOSED** から開始。
2. 次の未処理機種は **喧嘩祭（KPE）— 2014-04-21**。
3. その後、同日群を **マジックモンスター3 ぶっちぎり!魔界グランプリ → 緑ドンVIVA2 → ニューペガサス** の順で処理。
4. 04/21群完了後にメーカー横断再監査し、漏れがなければGROUP_CLOSEDとして次の具体日へ進む。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_skylove.md` から継続。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）** を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### パチスロ モンキーターンII
- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_mkt2/`
- K-Navi機種: `https://p-kn.com/slot/2017/`
- K-Navi AT初当たり: `https://p-kn.com/slot/2017/48875/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0051/`
- パチマガスロマガ機種: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/196/a.php`
- パチマガスロマガ朝一実戦値: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/196/10-1.php`
- パチ&スロ必勝本: `https://p.hisshobon.jp/machine/2363/1/45281`
- 期待値見える化: `https://slotjin.com/slot/monkeyturn2-morning/`
- すろぱちくえすと: `https://www.slopachi-quest.com/article/monkita-reset/`
- パチスロ最新解析@WIKI: `https://w.atwiki.jp/seruam/pages/19.html`

### 04-07群 / 次回境界
- K-Navi 2014年4月新台導入カレンダー: `https://p-kn.com/calendar/201404/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_skylove.md`
