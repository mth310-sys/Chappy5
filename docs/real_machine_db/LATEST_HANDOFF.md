更新日: 2026-09-15

## 現在地点
- recordCount: **1755**
- latestRecordAdded: **スマスロ 新鬼武者3 — No.1755**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-10-06_smart-slot-shin-onimusha3.md`
- chronologicalFrontier: **2025-10-06**
- schema: **resetBehavior v0.7**
- status: **2025-10-06_BOUNDARY_OPEN_1_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1754を再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1755 `スマスロ 新鬼武者3` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-10-06群は直前handoffのknown canonical 3機を継承し、現在1/3処理済み。全3機完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1755 — スマスロ 新鬼武者3
- path: `docs/real_machine_db/machines/2025-10-06_smart-slot-shin-onimusha3.md`
- manufacturer: **レオスター（製造） / エンターライズ（シリーズ・ブランド）**
- formalModel: **L新鬼武者3SA**
- inspectionCode: **5S0507**
- releaseDate: **2025-10-06**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.3 / 100.2 / 105.2 / 109.2 / 113.0%**
- AT初当り: **1/379.7 / 1/372.7 / 1/352.8 / 1/306.5 / 1/297.9 / 1/293.1**
- base: **約33G/50枚**
- 純増: **蒼剣RUSH 約2.5枚/G / 擬似ボーナス 約4.6枚/G / 真蒼剣RUSH 約5.5枚/G**
- 真蒼剣RUSH: **30G+幻魔京BATTLE6G+α / 継続率89% / 蒼剣RUSH突入から一連の増加区間終了まで期待獲得枚数約3600枚**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1755 resetBehavior v0.7
- 通常のゲーム数天井はAT間**1000G+α**。設定変更でもこのゲーム数天井自体は短縮されない。
- 通常の周期天井は最大**6周期**、設定変更後は最大**4周期**へ短縮。
- 設定変更時/AT終了時の初回周期は必ず**222BP以内**に鬼モードへ移行。
- 設定変更時の内部状態は二次解析比較表でRESET。なな徹は設定変更時を有利区間リセット契機として明記。
- 純電源OFF→ONは二次解析で天井・内部状態・内部モードを引継ぎ、液晶表示のみリセットとされる。機種固有一次資料の全項目比較は固定できていないため信頼度を分離。
- 設定変更以外の有利区間リセット後に付く「秀吉最終決戦」恩恵は、なな徹が**設定変更時を除く**と明記。朝一リセット恩恵へ混入させない。
- 朝一1周期目が111/222BP以外で鬼モード移行なら据え置き濃厚。4周期消化後もAT非当選なら据え置き濃厚材料。
- 有利区間ランプによる変更/据え置き判別は不可。
- 本機固有のガックン条件・発生率は検索語と資料系統を変えた再探索後も高信頼値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の通常/チャンス/天国モード具体振り分け、内部状態具体振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts / source normalization
- AT初当り、出玉率、約33G/50枚、AT純増2.5/5.5枚/Gは主要解析で一致し、重大な性能コアCONFLICTなし。
- メーカー表記は資料によりレオスター/エンターライズと揺れる。検定・業界資料のレオスター製とエンターライズ公式機種掲載を分離して保持。
- 4.6枚/Gは擬似ボーナス中の純増であり、通常ATの2.5枚/G・上位ATの5.5枚/Gと定義を分離。

## 2025-10-06境界 — OPEN 1/3 known canonical
1. スマスロ 新鬼武者3 — No.1755 DONE
2. L主役は銭形5 — No.1756 CANDIDATE
3. スマスロ バベル — No.1757 CANDIDATE

boundaryAudit:
- 直前handoffが2025-10-06群のknown canonicalを上記3機として確定候補化済み。
- No.1755の導入日は必勝本/一撃/HAZUSE/パチビー等で2025-10-06一致。
- 3機完了前のため境界はOPENを維持し、PB・別型式・地域先行・延期/段階導入の最終監査はCLOSED判定時に実施する。

## 次回再開地点
- 最新mainを再同期しNo.1755と本handoffを確認。
- **No.1756候補「L主役は銭形5」— 2025-10-06** から本線を継続する。
- 続いて **No.1757候補「スマスロ バベル」— 2025-10-06** を処理する。
- 3機完了後、2025-10-06群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定し、次の全国導入日へ進む。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。

## retro resetBehavior QA side-queue
- 本線新規収集を止めず、既存機種へのv0.7遡及は別QAリレーで継続。
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**
