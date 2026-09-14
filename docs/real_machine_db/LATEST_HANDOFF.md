更新日: 2026-09-14

## 現在地点
- recordCount: **1748**
- latestRecordAdded: **L咲-Saki-頂上決戦 — No.1748**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-08-04_l-saki-choujou-kessen.md`
- chronologicalFrontier: **2025-08-04**
- schema: **resetBehavior v0.7**
- status: **2025-08-04_GROUP_CLOSED_6_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1747実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1748 `L咲-Saki-頂上決戦` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-08-04群canonical 6機を全処理し、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定。
- 1gekiの2025年8月スケジュールでは2025-08-18にパチスロ新台0機。次の本線候補は2025-09-01 `ネオアイムジャグラーEX`。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1748 — L咲-Saki-頂上決戦
- path: `docs/real_machine_db/machines/2025-08-04_l-saki-choujou-kessen.md`
- manufacturer: **三洋物産 / SANYO**
- formalModel: **L咲-Saki-頂上決戦YR**
- inspectionCode: **5S0429**
- releaseDate: **2025-08-04**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.7 / 100.6 / 104.1 / 109.0 / 114.9%**
- CZ: **1/184.0 / 1/181.7 / 1/176.5 / 1/168.5 / 1/158.5 / 1/154.2**
- AT: **1/398.4 / 1/386.4 / 1/365.5 / 1/336.3 / 1/304.2 / 1/284.0**
- base: **約32.1G/50枚**
- netIncrease: **約4.5枚/G**
- basicPayout: **AT頂上決戦はゲーム数上乗せ型 / 平均獲得約563枚（設定1）**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1748 resetBehavior v0.7
- 設定変更で有利区間、AT間天井、特打ポイント、周期抽選モード、ライバルモードをRESET / 再抽選。
- AT間天井は通常 **1000G+前兆最大16G → 設定変更後最大600G+α** に短縮。
- 特打ポイントは表示300ptだが内部ランダム減算状態から開始し、表示と内部値がズレる場合あり。
- 設定1の設定変更時/AT終了時モード振り分けは通常54.8%、チャンス33.6%、福路9.6%、衣2.0%。設定2〜6の4モード完全表は高優先資料で固定できず `PUBLIC_FULL_TABLE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置きは有利区間、天井、特打ポイント、周期抽選モード、ライバルモードを引継ぎ。
- 純電源OFF→ONは後発二次資料で有利区間・天井・内部モード・内部状態引継ぎ、表示0G/東1局/咲ステージと整理。ただし高優先の独立電断比較表を固定できなかったため `ANALYSIS_SINGLE_SECONDARY_POWER_CYCLE`。
- 朝一600G消化で天井非発動なら据え置き濃厚。朝一が咲ステージ以外なら据え置き濃厚。ただし咲ステージ開始でも据え置き可能。
- 特打カウンタ表示300ptだけでは設定変更判別不可。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 通常遊技中の有利区間リセット後は `SPECIALのどっちジャッジ` 恩恵があるが、なな徹は **設定変更時を除く** と明記するため朝一恩恵に混入しない。

## conflicts / source normalization
- 「設定変更時平均55pt減算」はスロベース/6確等の後発二次資料にある一方、なな徹・必勝本はランダム減算とのみ記載。高優先照合不足のため `UNVERIFIED_SECONDARY_NUMERIC_VALUE` としcanonicalへ不採用。
- スロベース掲載の設定2〜6「通常/チャンス以上」割合は、高優先のなな徹が設定1の4モード具体値までしか公開していないためcanonicalへ不採用。

## 2025-08-04境界 — CLOSED 6/6 canonical
1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743 DONE
2. マタドールIII — No.1744 DONE
3. パチスロ 転生したら剣でした — No.1745 DONE
4. L アズールレーン THE ANIMATION — No.1746 DONE（2025-07-23直営フィールドテスト先行）
5. L ダーリン・イン・ザ・フランキス — No.1747 DONE
6. L咲-Saki-頂上決戦 — No.1748 DONE

boundaryAudit:
- 1geki 2025年8月新台スケジュールは2025-08-04のパチスロを6機とし、上記6機と一致。
- 情報島の2025-08-03記事も「8月4日より導入されるパチスロ新台6機種」として上記6機を列挙。
- 既存handoff継承のSlot Calendarも同6機。
- 情報島の別過去一覧にはなめ猫欠落版があるが、1geki・情報島機種別記事・Slot Calendar・各機種固有導入日を優先しcanonical 6機を維持。
- PB/別型式について、同日6機以外に独立レコード化すべき別スペックを今回の再監査で固定できず。
- 地域先行はNo.1746アズールレーンの2025-07-23直営フィールドテストを既存注記で保持。全国導入基準は2025-08-04。
- 2025-08-18は1gekiでパチスロ新台0機。したがって本線の次日付は2025-09-01。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- カーソル直後の既存実レコードをGit tree/pathで安全に一意確定できるまで遡及QAカーソルは保持する。
- 外部導入順からGitHub内部の次レコードを推測しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1748と本handoffを確認。
- **No.1749候補「ネオアイムジャグラーEX」— 2025-09-01** から本線を継続する。
- 2025-09-01群は1gekiでパチスロ1機。No.1749処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。
- その次は2025-09-08群（クレアの秘宝伝 ～はじまりの扉と太陽の石～ ボーナストリガーver. / スマスロ 東京リベンジャーズ / SLOTドルアーガの塔 / スマスロ ドルアーガの塔）を候補キューとするが、必ず次回最新mainと境界資料で再確認する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1748 L咲-Saki-頂上決戦
- グリーンべると/P-WORLD 新台発表: https://news.p-world.co.jp/articles/31093/greenbelt
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/5S0429/
- 一撃 機種概要: https://1geki.jp/slot/l_saki/
- 一撃 天井・朝一: https://1geki.jp/slot/l_saki/3/
- 一撃 AT頂上決戦: https://1geki.jp/slot/l_saki/83/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/40/kh01.php
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2718/2
- パチ＆スロ必勝本 設定変更時の恩恵: https://hisshobon.com/machineinfo/87534/
- なな徹 設定変更・据え置き・朝一判別・有利区間: https://nana-press.com/kaiseki/machine/995/31233/
- なな徹 モード移行抽選: https://nana-press.com/kaiseki/machine/995/31229/
- パチビー 天井: https://www.pachibee.jp/machines/kouryaku/225070002
- スロベース 電源OFF→ON比較: https://slobase.jp/machines/saki
- 6確 電源OFF→ON比較: https://www.kaku6.jp/slot/saki/

### 境界監査
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
- 情報島 2025-08-04導入6機記事: https://p-johojima.jp/colum/post-12038/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 1geki 2025年9月新台スケジュール: https://1geki.jp/newmachinecalender/202509/
