更新日: 2026-09-12

## 現在地点
- recordCount: **1436**
- latestRecordAdded: **SLOTタブー・タトゥー — No.1436**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-10-04_taboo-tattoo.md`
- chronologicalFrontier: **2021-10-04**
- frontierLatestMachine: **SLOTタブー・タトゥー — No.1436**
- schema: **resetBehavior v0.7**
- status: **2021-10-04_GROUP_OPEN_3_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1435「パチスロツインエンジェルPARTY」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1436「SLOTタブー・タトゥー」を追加。
- 2021-10-04群は既知5機のうち3機処理済み。残りはニューパルサーDX3 / パチスロ かまいたちの夜。
- 遡及resetBehavior QAは本線を優先し、カーソル `2007-05_kemonocchi.md`（けものっち!）を維持。

## No.1436 — SLOTタブー・タトゥー
- path: `docs/real_machine_db/machines/2021-10-04_taboo-tattoo.md`
- manufacturer: **ミズホ / ユニバーサルエンターテインメント**
- formalModel: **S／タブー・タトゥー／LL**
- certificationNumber: **1S0640**
- releaseDate: **2021-10-04**
- generation/system: **6.1号機 / AT / 疑似ボーナス+JAC-AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.2 / 98.1 / 100.2 / 103.5 / 105.5 / 108.2%**
- initialHit: **1/332.8 / 1/315.4 / 1/287.5 / 1/257.1 / 1/232.7 / 1/201.6**
- baseGamesPer50: **約40.3〜40.5G/50枚**
- netIncrease: **疑似ボーナス約2.0枚/G / VOID DRIVE約5.5枚/G**
- basicPayout: **疑似ボーナス20G / VOID DRIVE 1セット8G・75% or 90%継続 / AT初当り平均約386枚**
- normalCeiling: **有利区間移行後最大800G → トリガーボーナス**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**

### resetBehavior v0.7 — No.1436
- **設定変更**: 天井・ゲーム数・内部テーブル/状態・有利区間をRESET。ユニメモ以外をクリアし、晴海中学ステージをセット。
- **据え置き**: 内部ゲーム数/天井・テーブル/状態・有利区間をCARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態・有利区間はCARRY_OVER。通常時なら演出をクリアして晴海中学へ戻り、トリガーボーナス中ならセーギステージへ戻る。演出/表示カウンタと内部状態を分離して保存。
- **天井**: 通常最大800G。設定変更専用の固定短縮天井は確認されない。
- **モード/テーブル**: 有利区間移行時に通常A/B/C・チャンスA/B/C・天国を抽選。設定変更専用テーブルではなく、有利区間移行時共通抽選として記録。
- **有利区間移行時公開数値（レア役以外）**: 設定1は通常A29.4/B19.6/C9.8、チャンスA9.8/B6.7/C3.1、天国21.6%。設定6は通常A/B/C各14.9、チャンスA/B/C各11.4、天国21.1%。中間設定も実レコードに保存済み。
- **朝一恩恵**: 設定変更固有の固定短縮天井・専用初当たり/CZ優遇は複数資料で確認できず `NONE_CONFIRMED`。
- **朝一不利**: 前日天井進行・テーブル・内部状態をクリアするため、据え置きなら残っていた進行は失われる。専用ペナルティ率はなし。
- **変更判別**: 通常時は有利区間ランプ基本消灯なので朝一消灯では判別不可。点灯なら据え置き濃厚。設定変更/純電断とも晴海中学へ戻り得るためステージ単独判別も困難。
- **ガックン**: 本機固有の発生条件・発生率は検索語/資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-10-04群 — OPEN
1. **ファンキージャグラー2 — No.1434 / DONE**
2. **パチスロツインエンジェルPARTY — No.1435 / DONE**
3. **SLOTタブー・タトゥー — No.1436 / DONE**
4. **ニューパルサーDX3 — No.1437候補 / NEXT**
5. **パチスロ かまいたちの夜 — No.1438候補 / QUEUED**
- 群末尾で全メーカー・PB・地域先行・30Φ/別型式・延期/段階導入を再監査し、追加未処理がなければCLOSEDへ移行する。

## 次回本線の再開地点
- **2021-10-04群 / No.1437候補: ニューパルサーDX3**。
- 性能コア＋resetBehavior v0.7を収集し、既存No.1434〜1436を無駄に再調査しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kemonocchi.md`（けものっち!）**。

## GitHub保存
- No.1436追加 commit: `b67f548a8c0a0824e5f5778c41f300bf70cc5009`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1436 SLOTタブー・タトゥー
- https://www.universal-777.co.jp/news/20210816001512/
- https://news.p-world.co.jp/articles/17758/nippon
- https://news.p-world.co.jp/articles/17670/yugitsushin
- https://g-net-ps.com/industry/certif-2021-0813/
- https://www.p-world.co.jp/machine/database/9462
- https://1geki.jp/slot/s_tabootattoo
- https://1geki.jp/slot/s_tabootattoo/42/
- https://nana-press.com/kaiseki/machine/152/5169/
- https://nana-press.com/kaiseki/machine/152/5703/
- https://pachiseven.jp/machines/6395/cutout/2
- https://pachiseven.jp/machines/6395
- https://chonborista.com/slot/universal-slot/148373/
- https://ichikatsu.com/tabootattoo/
- https://slot-seven.com/tabootattoo-tenzyo/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/46/at02.php

### 2021-10-04群境界（継続）
- https://ichikatsu.com/newslot/
- https://news.p-world.co.jp/articles/18030/nippon
- https://lon-lon.jp/senkawa/10%E6%9C%88%E6%96%B0%E8%A3%85%E9%96%8B%E5%BA%97%E2%91%A0/
