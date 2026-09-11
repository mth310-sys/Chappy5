更新日: 2026-09-12

## 現在地点
- recordCount: **1432**
- latestRecordAdded: **HIT128 — No.1432**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-09-21_hit128.md`
- chronologicalFrontier: **2021-09-21**
- frontierLatestMachine: **HIT128 — No.1432**
- schema: **resetBehavior v0.7**
- status: **2021-09-21_GROUP_OPEN_1_OF_2_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1431「パチスロ ロリクラ☆ほーるど！」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおり、次の未処理機種No.1432「HIT128」を追加。
- 2021-09-21群は既知2機のうち1機処理済み。残りは「マジカルハロウィン～Trick or Treat！～」。
- 遡及resetBehavior QAは本線を優先して今回は進めず、次カーソル「機動警察パトレイバーX」を維持。

## No.1432 — HIT128
- path: `docs/real_machine_db/machines/2021-09-21_hit128.md`
- manufacturer: **岡崎産業**
- formalModel: **Sヒット128H1**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2021-09-21**
- generation/system: **6号機 / ゲーム数管理型AT**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **96.9 / 97.6 / 103.5 / 110.0%**
- AT初当たり: **1/127.5 / 1/127.5 / 1/127.3 / 1/127.1**
- baseGamesPer50: **約50.0〜51.0G/50枚**
- netIncrease: **約2.5枚/G**
- basicPayout: **AT 10〜999G、初期G数候補10/50/100/200/300/400/500/800/999G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_POWER_CYCLE_DISPLAY_EXCEPTION**

### resetBehavior v0.7 — No.1432
- **設定変更**: 内部天井/規定G・内部状態RESET。朝一は通常仕様の最大128GでAT。設定変更専用の短縮天井や専用優遇率は確認できず。
- **据え置き**: 内部規定G・内部状態・進行中有利区間CARRY_OVER。
- **純電源OFF→ON**: 内部規定G・内部状態はCARRY_OVER。ただし通常時の液晶ゲーム数カウンタ表示だけクリアされ、見かけ上「128G」から再カウントする。内部規定Gは保持。
- **ゲーム数/天井**: 最大128GでAT当選。MIX5中のレア役などで規定G短縮あり。
- **モード/状態**: MIX1〜5。電断後は内部状態を引き継ぐため、表示MIXより内部が高い場合あり。設定変更専用の確率付き初期振り分けは未確認。
- **有利区間**: AT終了後は必ず有利区間リセットとの解析あり。設定変更時RESET、据え置き/純電断CARRY_OVERとして整理。
- **朝一恩恵/不利**: 設定変更専用の明確な恩恵・不利は確認できず。
- **変更判別**: 通常時有利区間ランプ消灯型との解析があり、ランプ単独では変更判別不可。純電断で液晶カウンタだけ128Gへ戻るため、表示Gだけでも確定判別不可。
- **公開朝一数値**: 設定変更後最大128G。設定変更専用のAT初当たり率・モード振り分け・特定G以内当選率は `NO_PUBLIC_RESET_SPECIFIC_RATE_FOUND_AFTER_RESEARCH`。
- **UNVERIFIED**: 検定番号、本機固有ガックン、設定変更専用MIXモード/内部状態振り分け、本機専用の設定変更直後ランプ遷移。

## 2021-09-21群 — OPEN
1. **HIT128 — No.1432 / DONE**
2. **マジカルハロウィン～Trick or Treat！～ — No.1433候補 / NEXT**
- 既知キューは2機。No.1433処理後、メーカー横断・PB・地域先行・別型式・延期/段階導入を再監査しCLOSED可否を判定する。

## 次回本線の再開地点
- **No.1433候補: マジカルハロウィン～Trick or Treat！～（コナミアミューズメント / KPE系）— 2021-09-21**。
- 性能コア＋resetBehavior v0.7を収集後、2021-09-21群の境界監査を実施する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）**。

## GitHub保存
- No.1432追加 commit: `9723b15f7ce4b0949db8a52684ffb29f6045f2de`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1432 HIT128
- https://okazakisangyo.com/machine/hit128/
- https://news.p-world.co.jp/articles/17305/greenbelt
- https://www.p-world.co.jp/machine/database/9444
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/83/kh01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/83/kh02.php
- https://1geki.jp/slot/s_hit128/
- https://chonborista.com/slot/okazaki-slot/146624/
- https://slot-seven.com/hit128-tenzyou/
- https://slotmethod.jp/archives/7664/
- https://www.pachinkoquora.com/machine/pachinslot/1125/
