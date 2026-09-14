更新日: 2026-09-14

## 現在地点
- recordCount: **1746**
- latestRecordAdded: **L アズールレーン THE ANIMATION — No.1746**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-08-04_l-azur-lane-the-animation.md`
- chronologicalFrontier: **2025-08-04**
- schema: **resetBehavior v0.7**
- status: **2025-08-04_GROUP_OPEN_4_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1745実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1746 `L アズールレーン THE ANIMATION` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-07-23のKYORAKU直営店フィールドテスト先行導入と全国導入2025-08-04を分離して記録。
- 2025-08-04群はcanonical 6機のうち4/6処理済みとしてOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1746 — L アズールレーン THE ANIMATION
- path: `docs/real_machine_db/machines/2025-08-04_l-azur-lane-the-animation.md`
- manufacturer: **京楽産業. / KYORAKU**
- formalModel: **Lパチスロアズールレーン THE ANIMATION KN**
- inspectionCode: **5S0317**
- fieldTestDate: **2025-07-23（サンシャインKYORAKU直営店）**
- releaseDate: **2025-08-04（全国導入）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.6 / 100.7 / 105.3 / 110.6 / 114.9%**
- bonus: **1/167.4 / 1/166.5 / 1/164.3 / 1/161.3 / 1/158.9 / 1/156.0**
- AT canonical: **1/598.9 / 1/589.5 / 1/564.2 / 1/527.1 / 1/496.4 / 1/467.5**
- base: **約25.8G/50枚**
- netIncrease: **アズールレーンRUSH約2.5枚/G / 異次元性能SS RUSH約5.1枚/G**
- basicPayout: **海戦BONUS平均約100枚 / AT初期は海戦ATTACK平均約100G上乗せ / 上位一連期待枚数約3500枚over**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1746 resetBehavior v0.7
- 設定変更で有利区間・天井・内部状態・ボーナス規定回数をRESET/再抽選。据え置きでは有利区間・天井・内部状態・ゲーム数をCARRY_OVER。
- 通常ボーナス間天井は最大350G+α。変更時は内部約30G加算のため実質約320G前後+αへ短縮。
- ボーナス規定回数天井は通常最大10回目→変更時最大7回目へ短縮。1回目・3回目が選ばれやすい。
- 設定変更時の内部状態は通常59.8% / 高確39.8% / 超高確0.4%。高確以上約40.2%。
- AT間天井は2000G+α。設定変更専用短縮の公開値は確認できず、通常値を維持。
- 必勝本の直接比較表で電源OFF→ONは天井までのG数・ボーナス回数・内部状態・裏モードをCARRY_OVER。明石商店/表示G/開始ステージは純電断時「現在調査中」。
- 純電断時の有利区間を独立条件で直接列挙した高優先資料は未固定のため、据え置き表から自動転記せず `UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH`。
- 設定変更時の裏モードは非裏モードへ。明石商店は非点灯、表示Gは0G、学園ステージ開始。
- なな徹はリセット判別を「現在調査中」。本機固有ガックン条件/発生率も検索語・型式・メーカー変更後に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更以外の有利区間リセット後は上位CZ「天城BATTLE」恩恵があるが、設定変更時を除外する明記があるため朝一恩恵に混入しない。

## conflicts / source normalization
- AT初当り設定5は、なな徹・必勝本・HAZUSE・パチマガスロマガ・Altema・ちょんぼりすた等が **1/496.4** で一致。一撃・kaku6は **1/469.4**。多数一致の1/496.4をcanonicalとし `CONFLICT_AT_SETTING5_496_4_VS_469_4` を保持。
- 型式表記は媒体により `LアズールレーンTHE ANIMATION KN` / `Lパチスロアズールレーン THE ANIMATION KN`。遊技通信の後者をformalModelとし、前者を略表記として扱う。
- 導入日は全国導入2025-08-04をcanonical、2025-07-23はメーカー直営フィールドテスト先行日として別フィールドに保持。

## 2025-08-04境界 — OPEN 4/6 canonical
1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743 DONE
2. マタドールIII — No.1744 DONE
3. パチスロ 転生したら剣でした — No.1745 DONE
4. L アズールレーン THE ANIMATION — No.1746 DONE（2025-07-23直営フィールドテスト先行）
5. L ダーリン・イン・ザ・フランキス — NEXT
6. L咲-Saki-頂上決戦 — QUEUED

boundaryAudit:
- 1geki 2025年8月新台スケジュールは2025-08-04にパチスロ6機を掲載し、上記6機と一致。
- Slot Calendarも2025-08-04予定として同6機を掲載。
- 情報島の過去新台一覧はなめ猫を当日一覧から欠落させる版があり、1geki/Slot Calendar/機種固有導入日と照合して6機canonicalを維持。
- 6機処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- カーソル直後の既存実レコードをGit tree/pathで安全に一意確定できるまで遡及QAカーソルは保持する。
- 外部導入順からGitHub内部の次レコードを推測しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1746と本handoffを確認。
- **No.1747候補「L ダーリン・イン・ザ・フランキス」— 2025-08-04** から本線を継続する。
- 次に **L咲-Saki-頂上決戦** を処理し、2025-08-04 canonical 6機を完了させる。
- 6機完了後にPB・別型式・地域先行・延期/段階導入を再監査し、境界CLOSED判定へ進む。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。
- 遡及QAは `2007-07-09_genju-haou-t.md` 直後の「既存実レコード」をGit tree/pathで一意確定できた時点から再開する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1746 L アズールレーン THE ANIMATION
- KYORAKU公式 全国導入記念: https://www.kyoraku.co.jp/news/detail/843
- KYORAKU公式 直営店フィールドテスト: https://www.kyoraku.co.jp/news/detail/834
- P-WORLD/グリーンべると 新台記事: https://news.p-world.co.jp/articles/31286/greenbelt
- P-WORLD/遊技通信 型式・スペック: https://news.p-world.co.jp/articles/31345/yugitsushin
- 一撃 機種トップ: https://1geki.jp/slot/l_azurlane/
- 一撃 天井・朝一: https://1geki.jp/slot/l_azurlane/3/
- 一撃 ボーナス規定回数: https://1geki.jp/slot/l_azurlane/45/
- なな徹 初当たり/機械割: https://nana-press.com/kaiseki/machine/993/30869/
- なな徹 朝一/リセット/据え置き/有利区間: https://nana-press.com/kaiseki/machine/993/31190/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87705/
- 必勝本 天井: https://hisshobon.com/machineinfo/87707/
- 必勝本 天井&設定変更/電源OFF ON: https://hisshobon.com/machineinfo/87679/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0317/
- パチマガスロマガ 初当たり/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/22/kh02.php
- パチマガスロマガ 天井: https://pachimaga.com/free/mach/maker-s/kyoraku/064403.php
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10312
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/238482/
- Altema: https://altema.jp/pachimo/lazurlane
- kaku6: https://www.kaku6.jp/slot/azurlane/
- 情報島 フィールドテスト記事: https://p-johojima.jp/new_machine/post-11099/

### 境界監査（継承）
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 情報島 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/
