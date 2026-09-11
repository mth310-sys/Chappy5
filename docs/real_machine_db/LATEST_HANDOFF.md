更新日: 2026-09-11

## 現在地点
- recordCount: **1334**
- latestRecordAdded: **SLOTバジリスク～甲賀忍法帖～絆2 — No.1334**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-02-17_slot-basilisk-kouga-ninpouchou-kizuna2.md`
- chronologicalFrontier: **2020-02-17**
- frontierLatestMachine: **SLOTバジリスク～甲賀忍法帖～絆2 — No.1334**
- schema: **resetBehavior v0.7**
- status: **2020-02-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1333「パチスロ 青鬼」を再取得してから継続。
- `INDEX.md` は旧19件表示のため、README明示ルールどおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 2020-02-04〜02-16境界を再監査し、直前handoff指定の **2020-02-17「SLOTバジリスク～甲賀忍法帖～絆2」**をNo.1334として追加。
- 性能コアとresetBehavior v0.7を同時収集。`SLOTバジリスク～甲賀忍法帖～絆2 / バジリスク絆2 / バジ絆2 / S／甲賀忍法帖／LL / 9S1461 / ミズホ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 800G / BCスルー / モードテーブル / 状態 / 有利区間 / ランプ / ガックン` を組み替え、業界記事・HAZUSE・1geki・K-Navi・必勝本系・当時解析・後年整理資料を横断。
- K-Navi 2020年2月新台カレンダーは2020-02-17のパチスロを **絆2 1機**として掲載。遊技日本・P-WORLD/グリーンべるとでも2/17導入を確認し、別型式/別スペック/PB/地域差の追加独立候補を固定できなかったため **2020-02-17_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とする。
- 次の確認済み導入群は **2020-02-24**。K-Navi掲載は **DIAMOND / スロまる / パチスロファンタシースターオンライン2**。

## No.1334 — SLOTバジリスク～甲賀忍法帖～絆2
- path: `docs/real_machine_db/machines/2020-02-17_slot-basilisk-kouga-ninpouchou-kizuna2.md`
- manufacturer: **ミズホ**
- formalModel: **`S／甲賀忍法帖／LL`**
- certificationNumber: **9S1461**
- releaseDate: **2020-02-17**
- generation/system: **6号機 / AT / BC経由型 / シナリオ管理型セットAT**
- payoutRate: **97.4 / 98.6 / 102.0 / 106.1 / 110.1 / 112.9%**
- BC: **1/139.4 / 132.8 / 134.1 / 128.1 / 125.4 / 110.2**
- BT初当たり: **1/525.6 / 453.3 / 457.7 / 371.4 / 370.9 / 235.7**
- base canonical: **約50G/50枚**。約49.5G表記も併記。
- netIncrease: **約2.9枚/G**
- BT: **1セット約40G**
- 天井: **有利区間移行後800Gで同色BC / BC最大7スルー後の次回BCでBT**。

### resetBehavior v0.7 — No.1334
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_SUPPORT_AND_PUBLIC_MODE_DATA**
- 設定変更: **有利区間RESET / 800G天井・BCスルー回数RESET / 通常モードテーブル再抽選 / 初期状態抽選**。
- 据え置き: **有利区間・天井進行・BCスルー回数・通常モードテーブルCARRY_OVER**。
- 純電源OFF→ON: **有利区間・天井G・BCスルー回数CARRY_OVER**。有利区間ランプ点灯状態を引き継ぐ資料あり。
- ceilingAfterReset: 設定変更専用短縮天井なし。新有利区間の通常契約として **800G**。
- modeAfterReset: 有利区間移行ゲームで16種テーブルを再抽選。高設定ほどテーブル14・15が選択されやすい。
- stateAfterReset: 有利区間移行時に低確/高確/超高確の初期状態抽選。偶数・高設定ほど高確開始優遇、超高確開始は設定5以上のみ確認。
- resetDetection: 朝一有利区間ランプ消灯は変更方向、点灯継続は据え置き方向の強い材料。ただし変更後に店側が数G回す対策が可能なため絶対確定扱いにしない。甲賀卍谷開始は変更/電断双方で起こる。ガックン条件/率はUNVERIFIED。
- publicMorningNumbers: **800G / 最大7スルー→8回目BC / テーブル14・15・16の設定別選択率を収録**。設定変更専用ではなく有利区間移行時共通値として定義分離。

## No.1334 品質注記 / CONFLICT
- メーカー表記は一部二次資料に「エレコ」「ユニバーサル」があるが、当時業界記事・HAZUSE・K-Naviがミズホ製で一致するためcanonicalはミズホ。
- baseGamesPer50は約50G/50枚と約49.5G/50枚が併存。丸め/算出差として併記し平均化しない。
- 1gekiの設定変更/電断ページは現在も内部状態等を「調査中」としているため、純電断時の低確/高確/超高確状態の独立した全契約は推測補完しない。

## 2020-02-17群監査
- **SLOTバジリスク～甲賀忍法帖～絆2 — No.1334 処理済み**。
- K-Navi 2020年2月カレンダーでは2/17のパチスロは絆2のみ。遊技日本・P-WORLD/グリーンべるとでも2/17導入を照合。
- 同日全メーカー/別型式/別スペック/PB/地域差も検索したが追加独立候補を固定できず。
- 判定: **CLOSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- `2007-03_wild7.md` まで再QA済み。
- 次回: `docs/real_machine_db/machines/2007-03_wanpaku-pilot-daibouken.md`（わんぱくパイロット大冒険）。
- 今回は本線No.1334追加と2/17群監査を優先し、遡及QAは進めていない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1334を再取得。
2. 2020-02-18〜02-23境界を全メーカー/PB/地域差/別型式で再監査。
3. 次の確認済み導入群 **2020-02-24** を開始。
4. No.1335第一候補は **DIAMOND（JPS）**。続いて **スロまる（JPS）→ パチスロファンタシースターオンライン2（Sammy）** を性能コア＋resetBehavior v0.7で処理。
5. 2020-02-24群を横断監査してCLOSED可否を判定。
6. 遡及QAは **わんぱくパイロット大冒険** から継続。

## 主要出典 — 取得日 2026-09-11
### No.1334 絆2
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-33224/
- HAZUSE: https://hazuse.com/machine/pachislot/9S1461/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/9S1461/genre/209/
- パチスロ必勝本系: https://p.hisshobon.jp/vpage/2362/2
- 1geki 天井/設定変更: https://1geki.jp/slot/s_b_kizna2/3/
- スロットセブン 朝一: https://slot-seven.com/basiliskkizuna2-tenzyou/
- すろぱちくえすと 朝一: https://www.slopachi-quest.com/article/basilisk-kizuna2-tennjou/
- P-WORLD/グリーンべると: https://news.p-world.co.jp/articles/12846/greenbelt

### 群監査 / 次境界
- K-Navi 2020年2月新台カレンダー: https://p-kn.com/calendar/202002/
