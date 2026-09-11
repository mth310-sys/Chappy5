更新日: 2026-09-11

## 現在地点
- recordCount: **1363**
- latestRecordAdded: **シャア専用パチスロ 逆襲の赤い彗星 — No.1363**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-08-03_char-gyakushu-no-akai-suisei.md`
- chronologicalFrontier: **2020-08-03**
- frontierLatestMachine: **シャア専用パチスロ 逆襲の赤い彗星 — No.1363**
- schema: **resetBehavior v0.7**
- status: **2020-08-03_GROUP_CLOSED_AFTER_FULL_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1362「パチスロ真・北斗無双」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 直前handoffの次の未処理候補 **シャア専用パチスロ 逆襲の赤い彗星** をNo.1363として追加。
- 型式 `Sシャア専用パチスロ 逆襲の赤い彗星G`、ビスティ、6号機高純増ATを遊技日本/PiDEA等で固定。検定番号は十分再探索しても今回固定できずUNVERIFIEDのまま推測補完しない。
- 導入日はSANKYOオンライン博物館（月単位）、K-Navi、グリーンべると、2020新台カレンダーで2020-08-03を固定。

## No.1363 — シャア専用パチスロ 逆襲の赤い彗星
- path: `docs/real_machine_db/machines/2020-08-03_char-gyakushu-no-akai-suisei.md`
- manufacturer: **ビスティ**
- formalModel: **Sシャア専用パチスロ 逆襲の赤い彗星G**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2020-08-03**
- generation/system: **6号機 / 高純増ゲーム数上乗せ型AT / CZ経由主体**
- 出玉率: **97.3 / 99.1 / 100.6 / 103.2 / 106.3 / 110.1%**
- AT初当たり: **1/1066.61 / 1/926.43 / 1/849.45 / 1/746.17 / 1/659.91 / 1/583.33**
- base: **約51G/50枚**
- netIncrease: **約8.0枚/G**
- 天井: **通常時最大250G+αでCZ「百式BATTLE」**。AT確定天井ではない。
- CZ「百式BATTLE」: 敵MS3体撃破でAT、AT期待度約28%。
- AT「NEO ZEON RUSH」: MS ATTACKで初期ゲーム数決定。後発解析では初期70G以上・平均約120Gの整理あり。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_SETTING1_MODE_DATA**

### resetBehavior v0.7 — No.1363
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET / ランプ消灯 → 非有利区間「出撃待機モード」**。
- 据え置き・純電源OFF→ON: **天井 / 内部状態 / 有利区間状態CARRY_OVER**、通常時ランプ点灯が基本。
- 非有利区間で撃破率モードを新規抽選。
- 設定1の公開モード振り分け: **通常68.38 / チャンス22.48 / MAXチャレンジ9.14%**。
- この表は設定変更専用テーブルではなく非有利区間での一般抽選。設定変更後も非有利区間を経由するため朝一比較値として保存。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。通常の最大250G+αから再スタート。
- リセット固有恩恵は主要攻略で「特になし」。新規区間のモード抽選を専用恩恵に数えない。
- 通常時有利区間ランプ点灯型。
  - 朝一消灯: **設定変更濃厚**。
  - 朝一点灯: **据え置き濃厚**。
  - 対策/前日終了状況があるため確定判別にはしない。
- 純電断後の具体的開始ステージ、本機固有ガックン条件・発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2020-08-03群監査
- 2020新台導入日カレンダーでは8/3のパチスロは **Sシャア専用パチスロ逆襲の赤い彗星** を確認。
- グリーンべるとも8/3から本機のホール導入開始を個別報道。
- 同日カレンダー上の他候補はパチンコであり、別型式・別スペック・PB・地域差として追加すべきパチスロ未処理機は今回の横断監査では確認できず。
- 群判定: **CLOSED_AFTER_FULL_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 性能側 `COMPLETE_CORE` は維持。
- reset側のみ **PARTIAL_RESEARCH_EXHAUSTED** へformalize。
- 通常時ゲーム数天井、朝一専用モード、有利区間は非該当/確認なし。
- 設定変更/据え置き/純電断時の成立済みボーナス・告知待ち状態、本機固有ガックン/初期出目等は当時業界、K-Navi、旧DB、回顧資料を再探索しても直接契約を固定できず、一般的5号機ノーマル機の挙動から補完しない。
- Git追加履歴を再確認し、熊酒場の直後に追加された次レコードは `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。
- 次回遡及QA: **ダンス☆マン**。

## 次回本線の再開地点
- 最新main再同期後、**2020-08-17群**へ進む。
- 確認済みパチスロ候補:
  1. **戦国コレクション4 — No.1364候補**（コナミアミューズメント / `S戦国コレクション4KF`）
  2. **ハイパーブラックジャック**（8/17全国導入。NET系/カルミナ系資料のメーカー表記を型式・検定資料で再固定する）
- グリーンべると/P-WORLD、遊技日本、複数解析、新台カレンダーで両機の2020-08-17導入を確認。
- 次回は8/17群を全メーカー・別型式・別スペック・PB・地域差・延期機まで再監査し、先頭未処理から処理する。

## GitHub保存
- No.1363追加 commit: `3ed1efe5c2e875f4a4bbd76393313bcbd1fce1b0`
- 熊酒場 resetBehavior QA commit: `91a8abff0fe2fd32b5413d8c3c961872f8d663d1`

## 主要出典 — 取得日 2026-09-11
### No.1363 シャア専用パチスロ 逆襲の赤い彗星
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/907/
- グリーンべると: https://web-greenbelt.jp/post-40221/
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-35338/
- K-Navi: https://p-kn.com/slot/3448/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9202
- 1geki 非有利区間/モード: https://1geki.jp/slot/s_char/21/
- スロットセブン 朝一: https://slot-seven.com/syasenyopatisuro-tenzyou/
- 2-9伝説 天井/設定変更: https://2-9densetsu.com/gyakuchar/
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/114413/
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/38/at01-2.php
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/38/cz01-1.php
- 2020新台一覧: https://pachinkopachisro.com/archives/53951811.html

### 遡及QA 熊酒場
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/2101/greenbelt
- K-Navi: https://p-kn.com/slot/672/action/538/
- パチ7回顧: https://pachiseven.jp/articles/detail/11261
- 5号機クロニクル NET一覧: https://5goki.com/net

### 次回2020-08-17群確認
- 戦国コレクション4 / グリーンべると: https://web-greenbelt.jp/post-40429/
- 戦国コレクション4 解析: https://pachinavi.net/machines/sengoku-collection-4/
- ハイパーブラックジャック / P-WORLD・グリーンべると: https://news.p-world.co.jp/articles/14410/greenbelt
- ハイパーブラックジャック / 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-36911/
