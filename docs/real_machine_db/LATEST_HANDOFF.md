更新日: 2026-09-10

## 現在地点
- recordCount: **1194**
- latestRecordAdded: **シークレットハイビスカス**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-21_secret-hibiscus.md`
- chronologicalFrontier: **2018-05-21**
- frontierLatestMachine: **シークレットハイビスカス — No.1194**
- schema: **resetBehavior v0.7**
- status: **2018-05-21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1193を再取得して開始。
- `INDEX.md` は依然19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時正本は **1193件 / chronologicalFrontier 2018-05-21 / 5/21群OPEN**。
- 未処理先頭 `シークレットハイビスカス` の日付競合を、パイオニア公式、グリーンべると、PiDEA、HAZUSE、P-WORLD、パチマガスロマガ、ちょんぼりすた、すろぱちくえすと、2-9伝説で再監査。
- 複数の導入後DBが2018-05-21で一致する一方、DMMは2018-05-28、グリーンべると/PiDEAの発表時資料は2018-06-03納品予定。予定日と実導入日を平均せず、**2018-05-21をcanonical**、05-28 / 06-03予定を`CONFLICT`としてNo.1194へ保存。
- パイオニア公式の「導入記念」キャンペーンが2018-05-14〜05-28に実施されていたことも確認。
- 5/21候補は `秘宝伝 Rev.` / `マジカルハロウィン6` / `シークレットハイビスカス` を回収済み。`ディスクアップ`は一次業界資料+複数DBにより2018-06-04候補へ繰り下げ済みのため、**5/21群をCLOSED**。
- 次の明確な未処理日付群として、HAZUSE / K-Navi / 2-9伝説 / ちょんぼりすたで **`ゆるせぽね` 2018-05-28** を確認。
- 遡及QAカーソルは前回から変更せず `2006-07_hanasakari.md`（花盛）。

## No.1194 — シークレットハイビスカス
- path: `docs/real_machine_db/machines/2018-05-21_secret-hibiscus.md`
- manufacturer: **パイオニア**
- releaseDateCanonical: **2018-05-21**
- formalModelName: `シークレットハイビスカス／AA`
- certificationNumber: `7S1036`
- generation/system: **5.9号機 / ノーマルA・完全告知 / 25φ**
- 機械割: **96.5 / 98.4 / 99.9 / 103.2 / 105.9 / 110.1%**
- BIG: **1/286 / 281 / 271 / 263 / 251 / 239**
- REG: **1/428 / 362 / 339 / 291 / 276 / 239**
- 合算: **1/171 / 158 / 150 / 138 / 131 / 119**
- 50枚ベース: **約35〜36G**
- BIG / REG: **312枚 / 最大約104枚**
- 天井: **非搭載**

### resetBehavior v0.7
- settingChange: 天井・AT/ART/CZ・モード系はN/A。本機固有の成立済みボーナス/内部フラグ処理は十分な再探索後も直接固定できず`UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置き独立条件での低レイヤー契約は`UNVERIFIED_AFTER_RESEARCH`。天井/AT/ART/CZ引継ぎはN/A。
- powerOFF→ON: 成立済みボーナス/内部フラグの本機固有契約は`UNVERIFIED_AFTER_RESEARCH`。
- gameCounter / ceiling: `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_RELEASE`。
- mode/state: AT/ART/CZモードなし。朝一用内部高確等の公開契約は`NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: `NOT_APPLICABLE_NORMAL_A_TYPE_NO_ADVANTAGEOUS_SECTION_GAMEPLAY`。
- morning benefit: ちょんぼりすたは「朝イチの恩恵などは無し」。短縮天井・朝一専用モード・公開初当たり優遇率はなし/未確認。
- resetDetection: パイオニア系なのでガックンが有効と思われるという推測資料はあるが、非常に分かりにくいとの注意付き。本機固有の確定条件/率は固定できず`POSSIBLE_GAKKUN_NONDETERMINISTIC`。

## conflicts
### シークレットハイビスカス導入日
- `CONFLICT_RELEASE_DATE_2018_05_21_VS_2018_05_28_VS_PRE_RELEASE_DELIVERY_2018_06_03`
  - HAZUSE / ちょんぼりすた / すろぱちくえすと / 2-9伝説: 2018-05-21。
  - DMMぱちタウン: 2018-05-28。
  - グリーンべると / PiDEA 2018-04-11発表記事: 2018-06-03納品予定。
  - canonicalは導入後資料の多数一致で2018-05-21。6/3は事前予定値として保持。
### シークレットハイビスカス設定1機械割
- `SECONDARY_PAYOUT_RATE_SETTING1_95_5_VS_PRIMARY_96_5`
  - みんスロのみ95.5%。
  - HAZUSE / P-WORLD / ちょんぼりすた / グリーンべるとは96.5%で一致するため96.5%をcanonical。

## 2018-05-21群監査
### 処理済み
- No.1192 秘宝伝 Rev. — canonical 2018-05-21（日付CONFLICT保持）
- No.1193 マジカルハロウィン6 — canonical 2018-05-21
- No.1194 シークレットハイビスカス — canonical 2018-05-21（日付CONFLICT保持）

### 再分類
- `ディスクアップ`: **2018-06-04候補**へ繰り下げ。
  - グリーンべると2018-04-25記事: 納品6/3開始予定。
  - 複数DB/解析: 導入6/4。
  - すろぱちくえすと2018一覧のみ5/21表記があるため、登録時は`CONFLICT_RELEASE_DATE_2018_05_21_VS_2018_06_04`として監査する。

### 群判定
- `2018-05-21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 現時点で5/21に残る独立未処理機種なし。ディスクアップは6/4群へ明示的に保留。

## 次候補 — 2018-05-28群
- `ゆるせぽね` / `アナターのワイフゆるせぽね`
  - HAZUSE: 導入2018-05-28、型式`ゆるせぽねDY`、検定`7S1516`。
  - K-Navi: ホール導入開始2018-05-28。
  - 2-9伝説: 2018-05-28群に掲載。
  - ちょんぼりすた: 2018-05-28、約2,000台。
  - 一撃: 導入予定2018-05-28。
  - 次回、同日全メーカー/別スペック監査をしつつNo.1195候補としてperformance core + resetBehavior v0.7を収集する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_shinzo-ningen-casshern.md**（新造人間キャシャーン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_hanasakari.md`（花盛）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は時系列本線の5/21群CLOSEを優先し、QAカーソルは進めていない。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- `ディスクアップ`を2018-05-21で先行登録しない。一次業界資料+複数DBが示す2018-06-04を本命として後続群でCONFLICT監査する。
- `シークレットハイビスカス`の6/3は発表時の納品予定値。導入後DB群の5/21と混ぜずCONFLICTを維持する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率の競合は平均化せず`CONFLICT`として保持する。
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1194を再取得。
2. **1194件 / chronologicalFrontier 2018-05-21 / 5/21群CLOSED**を正本として継続。
3. **2018-05-28 `ゆるせぽね` を未処理先頭**として同日群監査を行い、未登録ならNo.1195としてperformance core + resetBehavior v0.7を登録。
4. 5/28群を全メーカー/別スペックで監査し、漏れがなければCLOSEして2018-06-04群へ進む。
5. 6/4群では `ディスクアップ` の5/21 vs 6/4日付CONFLICTを忘れず保持する。
6. 遡及QAは `2006-07_hanasakari.md`（花盛）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1194 シークレットハイビスカス
- パイオニア公式 導入記念キャンペーン: https://www.slot-pioneer.co.jp/campaign/secret_rt/
- グリーンべると: https://web-greenbelt.jp/00010382/
- PiDEA: https://www.pidea.jp/articles/%E3%81%A4%E3%81%84%E3%81%AB%E7%99%BB%E5%A0%B4%EF%BC%81%E8%8F%AF%E3%82%92%E7%8B%AC%E3%82%8A%E5%8D%A0%E3%82%81%E3%80%8C%E3%82%B7%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%83%8F%E3%82%A4%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9%E3%80%8D%EF%BC%8F%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2
- HAZUSE: https://hazuse.com/machine/pachislot/7S1036/
- P-WORLD: https://www.p-world.co.jp/machine/database/8647
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/125/a.php
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/57664/
- すろぱちくえすと: https://www.slopachi-quest.com/article/secret-hibiscus/
- 2-9伝説: https://29den.com/newslot/
- みんスロ: https://minslo.com/%E3%82%B7%E3%83%BC%E3%82%AF%E3%83%AC%E3%83%83%E3%83%88%E3%83%8F%E3%82%A4%E3%83%93%E3%82%B9%E3%82%AB%E3%82%B9/

### 次候補 ゆるせぽね
- HAZUSE: https://hazuse.com/machine/pachislot/7S1516/
- K-Navi: https://p-kn.com/slot/3004/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/57961/
- 一撃: https://1geki.jp/slot/s_yurusephone/
- 2-9伝説: https://29den.com/newslot/
