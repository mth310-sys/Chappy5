更新日: 2026-09-12

## 現在地点
- recordCount: **1494**
- latestRecordAdded: **2027DB — No.1494**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-04-18_2027db.md`
- chronologicalFrontier: **2022-04-18**
- frontierLatestMachine: **2027DB — No.1494**
- schema: **resetBehavior v0.7**
- status: **2022-04-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1493 `パチスロ 月華 雅` を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- 並行更新を検出し、以前のNo.1490候補へ戻らず、handoff指定の次機種 `2027DB` をNo.1494として登録。
- HAZUSE、K-Navi、パチ＆スロ必勝本、P-WORLD、ちょんぼりすた、スロット期待値見える化、パチマガスロマガ、ぱちんこキュレーション等を横断して性能コアとresetBehavior v0.7を調査。
- 型式 `S2027DB`、検定番号 `1S1836`、JPS、2022-04-18導入、6.2号機・有利区間非搭載の特殊ノーマル/リアルボーナス高確率タイプを確認。
- 機械割97.9/99.6/103.7/106.2/110.4/114.9%、ソナーチャンス1/186.1〜1/56.1、バトルモード1/558.4〜1/168.3、約39G/50枚、BB約120枚。
- 通常時1680G+αで潜航モードへ移行する天井を確認。到達即ボーナスではなくソナーチャンス成功を補助する状態。天井到達後は50%でバトルモード中の2択ヒント高発生状態選択とする解析あり。
- 本機は6.2号機だが有利区間非搭載。一般的な6.2号機ATの有利区間RESET契約を流用していない。
- 設定変更でも1680G天井に対するハマりG数を引き継ぐとする解析を確認。一方、設定変更後は内部スタート状態A〜Eを再抽選するため、ゲーム数CARRY_OVERと内部状態RESELECTを分離して保存。
- 設定変更後のスタートE選択率は設定1〜6で12.50/15.63/18.75/21.88/25.00/25.00%。スタートEは潜航モード抽選状態=高確、ストック状態=高確、引き戻しモード=低確。
- 後年リセット一覧には設定変更時約25%で引き戻しモード移行とあるが、HAZUSE当時解析は設定変更時にも移行するものの率不明としている。平均・統合せず25%をANALYSIS_SINGLE相当で保持。
- RAMクリア時は設定変更とは別条件で内部バトルモード状態スタートとする実戦解析あり。強い朝一恩恵だが通常の設定変更挙動に誤統合しない。
- 純電源OFF→ON時の1680G天井G数・スタート状態・バトル/引き戻し状態、本機固有ガックン条件は検索語と資料系統を変えても直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1494 — 2027DB
- path: `docs/real_machine_db/machines/2022-04-18_2027db.md`
- manufacturer: **JPS（ジェイピーエス）**
- formalModel: **S2027DB**
- inspectionCode: **1S1836**
- releaseDate: **2022-04-18**
- generation/system: **6.2号機 / 特殊ノーマル・リアルボーナス＋ボーナス高確率状態 / PB機**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.6 / 103.7 / 106.2 / 110.4 / 114.9%**
- sonarChance: **1/186.1 / 1/176.7 / 1/178.3 / 1/162.8 / 1/171.6 / 1/56.1**
- battleMode: **1/558.4 / 1/530.1 / 1/534.9 / 1/488.5 / 1/514.9 / 1/168.3**
- baseGamesPer50: **約39G/50枚**
- basicPayout: **BB約120枚**
- ceiling: **通常時1680G+αで潜航モード。設定変更でもハマりG数引継ぎ。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PARTIAL_POWER_CYCLE**
- confidence: **HIGH**

### resetBehavior v0.7 — No.1494
- **設定変更**: 天井ハマりG数CARRY_OVER / 内部スタート状態RESELECT / 有利区間NOT_APPLICABLE。
- **据え置き**: 天井G数CARRY_OVER。内部状態も据え置きを基本扱い。
- **純電源OFF→ON**: 本機固有の天井G数・内部状態個別契約はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 1680G+αで潜航モード。設定変更でもハマりG数を引き継ぐとする解析あり。固定短縮なし。
- **モード/状態**: 設定変更後はスタートA〜E再抽選。スタートE選択率12.50〜25.00%。
- **有利区間**: 非搭載のためNOT_APPLICABLE。有利区間ランプ変更判別もNOT_APPLICABLE。
- **朝一恩恵/不利**: スタート状態再抽選。後年資料の引き戻し約25%は単一系統値。RAMクリア時内部バトルモード状態は設定変更とは別条件。
- **変更判別**: 有利区間ランプ不可。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。設定変更でもハマりG数を引き継ぐため天井G数だけの単純判別不可。
- **公開朝一数値**: スタートE 12.50/15.63/18.75/21.88/25.00/25.00%。後年資料で引き戻し約25%。

## 2022-04-18群 — CLOSED
既知独立レコード:
1. `十字架5` — **No.1491 処理済み**
2. `超ギラギラ爺サマー` — **No.1492 処理済み**
3. `パチスロ 月華 雅` — **No.1493 処理済み**
4. `2027DB` — **No.1494 処理済み**

- なな徹2022年上半期回顧で4/18の4機（十字架5 / 超ギラギラ爺サマー / 月華 雅 / 2027DB）が一致。
- PB機・別型式・25/30φ差・地域先行・延期/段階導入を含めて再監査。2027DB自体が20法人限定PB機であることを独立レコードとして取得済み。
- 4/18群に追加すべき独立パチスロ機種を確認できなかったため **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 次回本線の再開地点
- **2022-04-19〜2022-05-08境界を最終確認後、No.1495候補 `Sスーパー海物語IN JAPAN祭`（2022-05-09）から継続。**
- 2022-05-09群の既知候補は、K-Naviで `Sスーパー海物語IN JAPAN祭` / `パチスロ ゼーガペイン2` / `SLOT STEINS;GATE` / `ハナハナホウオウ～天翔～`。25φ/30φ・別型式・地域導入日の差を再確認して独立レコード判定する。
- 性能コアとresetBehavior v0.7を同時収集し、公開値欠損は表記揺れ・型式・メーカー・シリーズ名と各リセット検索語を変え、十分再探索後のみUNVERIFIEDとする。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回QAで `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`（仮面ライダーDX〜走れ！スーパーバイク編）を再QA済み。
- 今回は本線No.1494登録と4/18群CLOSED監査を優先し、遡及QAカーソルは進めていない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）**。

## GitHub保存
- No.1494追加 commit: `7b840596bb3076813aeffe556a78771481a2fd5b`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1494 2027DB
- https://hazuse.com/machine/pachislot/1S1836/genre/209/
- https://p-kn.com/slot/3779/
- https://p.hisshobon.jp/machine/3890/1/88235
- https://www.p-world.co.jp/machine/database/9621
- https://chonborista.com/slot/jps-slot/166743/
- https://www.slopachi-quest.com/article/s2027-tenjou/
- https://www.slopachi-quest.com/article/resets/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/49/kh01.php
- https://pachinko-curation.com/29563/

### 2022-04-18群監査 / 次境界
- https://nana-press.com/post/1576830
- https://p-kn.com/calendar/202205/
- https://1geki.jp/newmachinecalender/202205/
