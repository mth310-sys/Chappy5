更新日: 2026-09-11

## 現在地点
- recordCount: **1374**
- latestRecordAdded: **パチスロ七つの大罪 — No.1374**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-11-02_nanatsu-no-taizai.md`
- chronologicalFrontier: **2020-11-02**
- frontierLatestMachine: **パチスロ七つの大罪 — No.1374**
- schema: **resetBehavior v0.7**
- status: **2020-11-02_GROUP_OPEN_2_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1373「～ガールズケイリン～GⅠフェアリーグランプリ」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 直前handoffの指定どおり2020-11-02群の2機目 **「パチスロ七つの大罪」** を **No.1374** として追加。
- 11/02群は既知4機のうち2機処理済み。残り2機を順番に処理後、全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査してCLOSED可否を判定する。

## No.1374 — パチスロ七つの大罪
- path: `docs/real_machine_db/machines/2020-11-02_nanatsu-no-taizai.md`
- manufacturer: **タイヨーエレック製造 / サミー発売**
- formalModel: **S パチスロ七つの大罪 XS**
- certificationNumber: **0S0088**
- releaseDate: **2020-11-02**
- generation/system: **6号機 / 周期抽選 / CZ / 擬似ボーナス / ST型セット管理AT / 有利区間管理**
- 出玉率: **97.8 / 99.4 / 100.6 / 103.2 / 107.3 / 110.6%**
- ボーナス+AT合算: **1/279.5 / 1/269.0 / 1/260.0 / 1/237.2 / 1/218.3 / 1/188.4**
- base: **約43.6～43.7G/50枚**（資料丸め差を平均化せず保持）
- netIncrease: **約2.6枚/G**
- basicPayout: **大罪BONUS 30G+バトル5G / エピソードBONUS 30G / AT Seven Deadly Sins 1セット40G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS**

### resetBehavior v0.7 — No.1374
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET → 非有利区間「NOW LOADING…」開始**。
- 据え置き・純電源OFF→ON: **天井CARRY_OVER / 内部状態CARRY_OVER / 有利区間CARRY_OVER**。
- 電断後は液晶カウンター`???`、チェックポイント`?`表示へ変化するため、表示と内部進行を分離して保存。
- 天井: **500G消化後の次回周期到達**。恩恵は **エリザベス覚醒87.5% / 大罪ボーナス以上12.5%**。AT確定天井ではない。
- 設定変更専用の固定短縮天井は確認できず。
- 設定変更後は非有利区間から開始。非有利区間中の公開移行先数値:
  - 弱チェリー/スイカ: 周期開始90.8% / パトホークチャンス8.3% / エリザベス覚醒0.8%
  - 強チェリー/チャンス目: 周期開始25.0% / パトホークチャンス58.3% / エリザベス覚醒16.7%
  - これは設定変更専用テーブルではなく非有利区間共通値。朝一設定変更後に適用可能な公開数値として定義分離。
- 通常時は有利区間ランプ点灯型。朝一 **消灯=設定変更濃厚 / 点灯=据え置き濃厚**。ただし前日非有利区間終了・店側対策等があるため絶対判別条件にはしない。
- 有利区間ランプ位置: **WIN表示右下ドット**。
- 設定変更/電断ともNOW LOADING表示となる資料があるため液晶単独では判別不可。
- 設定変更専用モード/周期テーブル、設定変更直後の通常/高確初期振り分け、本機固有ガックン条件/発生率、設定変更専用朝一当選率は十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / 定義差
- baseGamesPer50: 必勝本43.6G/50枚、複数解析43.7G/50枚。平均化せず丸め差として両値保持。
- 大罪ボーナスAT期待度: 約40% / 約43%表記あり。完全再現用詳細値ではないため単一コア値へ統合せず保持。
- 1gekiの2020-11-10当時ページではreset契約が「調査中」だが、後発の必勝本・期待値見える化・すろぱちクエスト等ではRESET/CARRY_OVER契約が一致。数値競合ではなく資料更新差として後発一致情報をcanonical採用。

## 2020-11-02群監査 — OPEN
既知キュー:
1. **～ガールズケイリン～GⅠフェアリーグランプリ — No.1373 処理済み**
2. **パチスロ七つの大罪 — No.1374 処理済み**
3. **パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド — No.1375候補**
4. **華祭**

残り2機処理後、2020-11-02同日について全メーカー・別型式・別スペック・PB・地域差・延期機を再監査し、CLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。reset側 `PARTIAL_RESEARCH_EXHAUSTED`。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線を優先し、遡及QA地点は進めていない。

## 次回本線の再開地点
- 最新main再同期後、**No.1375候補「パチスロ学園黙示録ハイスクール・オブ・ザ・デッド ゴールド」** から継続。
- その後 **「華祭」** を処理。
- 2機処理後、2020-11-02群の全メーカー・別型式・別スペック・PB・地域差・延期機を横断監査してCLOSED判定する。

## GitHub保存
- No.1374追加 commit: `cc3aa8551af739f74d6530282b7d8aeb824f0bee`
- 直前No.1373追加 commit: `7f1b47d48a447b0e16ae6c451f1f6c66f3de8f0b`

## 主要出典 — 取得日 2026-09-11
### No.1374 パチスロ七つの大罪
- サミー公式: https://www.sammy.co.jp/japanese/news/2020/1512.html
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-38614/
- HAZUSE: https://hazuse.com/machine/pachislot/9S1816/
- 必勝本: https://hisshobon.news/uncategorized/3677/
- 1geki機種概要: https://1geki.jp/slot/s_taizai_index/
- 1geki天井/設定変更: https://1geki.jp/slot/s_taizai_index/3/
- 1geki非有利区間: https://1geki.jp/slot/s_taizai_index/40/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/119448/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/nanataizai/
- すろぱちクエスト: https://www.slopachi-quest.com/article/the-seven-deadly-sins-tennjou/
- P-WORLD: https://www.p-world.co.jp/machine/database/9241
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/182/bn01-3.php
- パチ7: https://pachiseven.jp/machines/6145/cutout/9

### 11/02群監査
- 1geki 2020年11月導入カレンダー: https://1geki.jp/newmachinecalender/202011/
