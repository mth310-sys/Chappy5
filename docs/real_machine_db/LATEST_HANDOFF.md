更新日: 2026-09-11

## 現在地点
- recordCount: **1357**
- latestRecordAdded: **沖ドキ！2-30 — No.1357**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-05-18_okidoki2-30.md`
- chronologicalFrontier: **2020-05-18**
- frontierLatestMachine: **沖ドキ！2-30 — No.1357**
- schema: **resetBehavior v0.7**
- status: **2020-05-18_GROUP_OPEN_3_OF_4_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1356「ビッグシオ-30」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- main上の正本はNo.1356まで進行済みであることを確認し、2020-05-18群の3機目 **沖ドキ！2-30** をNo.1357として追加。
- 性能コア＋resetBehavior v0.7を、正式型式/検定番号/設定変更/リセット/朝一/据え置き/電源OFF ON/天井/999G/967G/モード/モード振り分け/非有利区間/有利区間/ランプ/ガックン等を組み替えて再探索。
- 5/18群は **OPEN / 3 of 4 processed**。次はSOZ1-01。

## No.1357 — 沖ドキ！2-30
- path: `docs/real_machine_db/machines/2020-05-18_okidoki2-30.md`
- manufacturer: **アクロス**
- formalModel: **S／沖ドキ！2／SA-30**
- certificationNumber: **8S1437**
- releaseDate canonical: **2020-05-18**
- generation/system: **6号機 / AT / 30Φ沖スロ / 完全告知 / 擬似ボーナス / モード管理**
- payoutRate: **97.0 / 98.6 / 101.0 / 103.1 / 105.0 / 107.0%**
- BIG初当たり: **1/681.8 / 678.8 / 605.4 / 582.9 / 539.2 / 535.7**
- REG初当たり: **1/967.6 / 968.3 / 883.4 / 873.9 / 807.8 / 808.3**
- BONUS初当たり合算: **1/399.9 / 399.0 / 359.2 / 349.7 / 323.3 / 322.2**
- base: **約51.0G/50枚**
- netIncrease: **約4.0枚/G**
- BIG: **55G / 約220枚**
- REG: **15G / 約60枚**
- モード別天井: **通常A/B 999G、チャンス256G、天国準備500G、天国/ドキドキ/超ドキドキ/保証32G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_SETTING_CHANGE_CORE_POWER_CYCLE_PARTIAL**

### resetBehavior v0.7 — No.1357
- 設定変更: **非有利区間へ移行 / 天井進行RESET / 有利区間RESET**。
- 設定変更後はハズレ以外の成立役を参照して有利区間へ移行し、成立役×設定で内部モードを再抽選。
- ベル/リプレイ成立時の設定1→6モード振り分け:
  - 通常A **76.2 / 64.1 / 74.2 / 64.1 / 74.2 / 55.5%**
  - 通常B **16.8 / 25.0 / 18.8 / 25.0 / 18.8 / 31.2%**
  - チャンス **6.2 / 10.1 / 6.2 / 10.1 / 6.2 / 12.5%**
  - 天国準備 **0.8%全設定**
- チェリー/スイカ/確定役/中段チェリー成立時は別の優遇振り分けが公開されているが、完全再現用の全表は保存せず朝一に成立役依存がある事実のみ物差しへ採用。
- 通常時は有利区間ランプ基本消灯型。**朝一消灯だけでは設定変更判別不可**。朝一点灯なら前日から区間が残った据え置き挙動を強く示すが万能確定条件とはしない。
- 純電源OFF→ONについて、1gekiの初期比較表は天井/モードとも「調査中」。後期の本機固有直接契約を再探索しても十分な高信頼固定値を得られず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置きを純電断から独立条件として天井/モード/区間すべて明記した高信頼表も **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 本機固有ガックン条件/発生率は **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / QA notes — No.1357
- releaseDate: 実導入確認が厚い **2020-05-18** をcanonical。一部事前/旧資料に5/11、地域別一覧に5/25併記あり。`RELEASE_SCHEDULE_VARIANT_2020-05-11_VS_2020-05-18_VS_2020-05-25` として保持。
- ceilingAfterReset: 後期解析は設定変更→非有利区間→成立役別モード選択、そのモード規定G数。初期攻略の一部に「リセット後実質967G」表現があるため、通常A/Bの999Gを上書きせず `PROVISIONAL_DEFINITION_CONFLICT_967G_VS_MODE_REGULATION` として分離。
- powerCycleBehavior: 本機固有の後期確定公開値を固定できないため、後継機の引継ぎ契約を転記していない。

## 2020-05-18群監査
1. ハイドラ-30 — **No.1355 / 処理済み**
2. ビッグシオ-30 — **No.1356 / 処理済み**
3. 沖ドキ！2-30 — **No.1357 / 処理済み**
4. SOZ1-01 — **未処理 / No.1358候補**
- 群判定: **OPEN_3_OF_4_PROCESSED**。
- 次回はSOZ1-01を処理後、5/18同日全メーカー・別型式・別スペック・PB・地域差・延期機を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 本線を止めず、余力時に既存性能コアをやり直さずresetBehaviorのみv0.7基準で順次補完する。

## 次回本線の再開地点
- 最新main再同期後、**2020-05-18群の4機目「SOZ1-01」＝No.1358候補**から再開。
- 処理後、5/18同日全メーカー・別型式・別スペック・PB・地域差・延期機を再監査してCLOSED可否を判定。

## GitHub保存
- No.1357追加 commit: `4990c6447a8814021089b8c0fe49e92bcaad6c42`

## 主要出典 — 取得日 2026-09-11
### No.1357 沖ドキ！2-30
- ユニバーサルエンターテインメント公式: https://www.universal-777.co.jp/news/20200127001462/
- 岡山県公安委員会告示第167号: https://www.pref.okayama.jp/uploaded/life/1002555_9663975_misc.pdf
- P-WORLD業界ニュース / グリーンべると: https://news.p-world.co.jp/articles/12729/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/8S1437/genre/209/
- パチビー: https://www.pachibee.jp/machines/index/220040005
- K-Navi: https://p-kn.com/slot/3409/odds/
- 1geki TOP: https://1geki.jp/slot/s_okidoki30/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_okidoki30/3/
- 1geki 通常時モード移行: https://1geki.jp/slot/s_okidoki30/43/
- SLOT HACK: https://slothack.net/matome/7480/
- スロパチクエスト天井: https://www.slopachi-quest.com/article/okidoki2-tennjou/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/okidoki2/
- ぱちんこキュレーション: https://pachinko-curation.com/2254/
