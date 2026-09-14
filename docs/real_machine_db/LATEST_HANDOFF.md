更新日: 2026-09-14

## 現在地点
- recordCount: **1747**
- latestRecordAdded: **L ダーリン・イン・ザ・フランキス — No.1747**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-08-04_l-darling-in-the-franxx.md`
- chronologicalFrontier: **2025-08-04**
- schema: **resetBehavior v0.7**
- status: **2025-08-04_GROUP_OPEN_5_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1746実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1747 `L ダーリン・イン・ザ・フランキス` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-08-04群はcanonical 6機のうち5/6処理済みとしてOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1747 — L ダーリン・イン・ザ・フランキス
- path: `docs/real_machine_db/machines/2025-08-04_l-darling-in-the-franxx.md`
- manufacturer: **スパイキー**
- formalModel: **LダーリンインザフランキスSA**
- inspectionCode: **5S0291**
- releaseDate: **2025-08-04**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.8 / 98.9 / 100.6 / 105.4 / 110.5 / 114.5%**
- bonusInitialHit: **1/229.8 / 1/224.1 / 1/214.9 / 1/207.3 / 1/190.3 / 1/180.3**
- bonusHighProbability: **1/343.0 / 1/334.1 / 1/320.1 / 1/298.9 / 1/270.3 / 1/252.3**
- base: **約30.8G/50枚**
- netIncrease: **約5.0枚/G**
- basicPayout: **REG約40枚 / ダーリン・イン・ザ・ボーナス約100枚 / エピソードBONUS約200枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1747 resetBehavior v0.7
- 設定変更で有利区間、天井ゲーム数、REG/ボーナス高確率スルー回数、内部状態をRESET。
- 通常ボーナス間天井 **666G+α → 設定変更後最大390G+α**。内部ゲーム数ランダム加算により390Gより浅い到達あり。
- 必勝本の直接比較表で、設定変更時はフランクス高確・高確集中・ボーナス高確・フリーズ高確が各非高確へ。純電源OFF→ONでは各状態を引継ぎ。
- 電源OFF→ONのみでは天井までのゲーム数、REG/ボーナス高確率スルー回数も引継ぎ。
- なな徹直接比較表で設定変更は有利区間RESET、据え置きは引継ぎ。純電断時有利区間の独立直接文言は固定できず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 必勝本実戦上、設定変更時はゲーム数表示0G・寄宿舎開始。純電断時の表示/開始ステージは現在調査中。
- 朝一390G+αまでゲーム数天井が発動しなければ据え置き濃厚。
- 本機固有ガックン条件/発生率は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- なな徹独自シミュレーター値は性能コアと分離して保存。設定1・等価0Gで期待値-730円、天井到達率20.40%、実質初当り1/196。100G開始は+90円。

## conflicts / source normalization
- CZ確率は一撃が設定1 `1/125.1`、HAZUSEが `1/126.6` 等で差異。定義/更新時点差の可能性があるため `CONFLICT_CZ_RATE_DEFINITION_OR_REVISION` として保持し、主要initialHitはボーナス初当りとボーナス高確率を採用。
- ベースは約30.8G/50枚をcanonical。一撃の約31Gは丸め差として扱う。
- 通常遊技中の有利区間リセット後はボーナス高確率30G開始の恩恵があるが、設定変更時朝一へ自動転記しない。

## 2025-08-04境界 — OPEN 5/6 canonical
1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743 DONE
2. マタドールIII — No.1744 DONE
3. パチスロ 転生したら剣でした — No.1745 DONE
4. L アズールレーン THE ANIMATION — No.1746 DONE（2025-07-23直営フィールドテスト先行）
5. L ダーリン・イン・ザ・フランキス — No.1747 DONE
6. L咲-Saki-頂上決戦 — NEXT

boundaryAudit:
- 1geki 2025年8月新台スケジュールは2025-08-04にパチスロ6機を掲載し、上記6機と一致。
- Slot Calendarも2025-08-04予定として同6機を掲載。
- 情報島の過去新台一覧はなめ猫を当日一覧から欠落させる版があり、1geki/Slot Calendar/機種固有導入日と照合して6機canonicalを維持。
- No.1748処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- カーソル直後の既存実レコードをGit tree/pathで安全に一意確定できるまで遡及QAカーソルは保持する。
- 外部導入順からGitHub内部の次レコードを推測しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1747と本handoffを確認。
- **No.1748候補「L咲-Saki-頂上決戦」— 2025-08-04** から本線を継続する。
- No.1748処理後、2025-08-04 canonical 6機のPB・別型式・地域先行・延期/段階導入を再監査し、境界CLOSED判定へ進む。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。
- 遡及QAは `2007-07-09_genju-haou-t.md` 直後の「既存実レコード」をGit tree/pathで一意確定できた時点から再開する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1747 L ダーリン・イン・ザ・フランキス
- スパイキー公式: https://www.spiky.co.jp/
- P-WORLD/グリーンべると 検定通過記事: https://news.p-world.co.jp/articles/30934/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/5S0291/
- 一撃 基本スペック: https://1geki.jp/slot/l_darlifra/39/
- 一撃 天井・朝一: https://1geki.jp/slot/l_darlifra/3/
- なな徹 設定変更・朝一: https://nana-press.com/kaiseki/machine/989/30975/
- なな徹 天井: https://nana-press.com/kaiseki/machine/989/31174/
- 必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/87871/
- 必勝本 設定変更時の恩恵: https://hisshobon.com/machineinfo/87858/
- 必勝本 エンディング/有利区間: https://hisshobon.com/machineinfo/87884/
- 情報島: https://p-johojima.jp/machine_spec/post-9649/
- Altema 朝一リセット: https://altema.jp/pachimo/ldarihurareset

### 境界監査（継承）
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 情報島 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/
