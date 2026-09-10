更新日: 2026-09-10

## 現在地点
- recordCount: **1193**
- latestRecordAdded: **マジカルハロウィン6**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-21_magical-halloween6.md`
- chronologicalFrontier: **2018-05-21**
- frontierLatestMachine: **マジカルハロウィン6 — No.1193**
- schema: **resetBehavior v0.7**
- status: **2018-05-21_GROUP_OPEN_DISKUP_REDATED_TO_2018-06-04**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1192を再取得して開始。
- `INDEX.md` は依然19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時正本は **1192件 / chronologicalFrontier 2018-05-21 / 5/21群OPEN**。
- 5/21群候補 `ディスクアップ` / `マジカルハロウィン6` / `シークレットハイビスカス25π` を再監査。
- `ディスクアップ` はサミー内覧会の業界一次報道が「納品6月3日開始予定」、複数機種DB/解析が2018-06-04導入で一致するため、5/21一覧だけを根拠にNo.1193へ入れず **2018-06-04候補へ繰り下げ**。すろぱちくえすとの2018一覧にある5/21表記は将来レコードで日付CONFLICTとして保持する。
- No.1193 `マジカルハロウィン6` をperformance core + resetBehavior v0.7付きで新規登録。
- マジハロ6のresetBehaviorは公式開発者回答まで到達。通常設定変更で **RT状態と成立済みボーナスは保持**、一方で **有利区間は初期化され非有利区間へ移行**するため、RTと有利区間/内部状態を別契約として保存。
- 5/21群は `シークレットハイビスカス` の導入日資料に2018-05-21 / 2018-05-28 / 納品6月3日予定の差があるためCLOSEせずOPEN継続。
- 遡及QAカーソルは前回から変更せず `2006-07_hanasakari.md`（花盛）。

## No.1193 — マジカルハロウィン6
- path: `docs/real_machine_db/machines/2018-05-21_magical-halloween6.md`
- manufacturer: **KPE / コナミアミューズメント**
- releaseDateCanonical: **2018-05-21**
- formalModelName: `マジカルハロウィン6／KK`
- certificationNumber: `7S1520`
- generation/system: **5.9号機 / A+ART**
- 機械割: **97.7 / 98.9 / 100.5 / 104.2 / 107.8 / 110.2%**
- ボーナス合算: **1/177.12 / 173.38 / 169.78 / 163.02 / 159.84 / 156.04**
- ART初当たり: **1/364.73 / 363.48 / 362.26 / 360.13 / 359.13 / 357.56**
- 50枚ベース: **約32.8G**
- ART純増: **約1.0枚/G**
- ART基本: **1セット30G+α**
- 赤同色BIG / 異色BIG / 鬼BONUS / REG: **256 / 176 / 約136 / 64枚**
- 通常ゲーム数天井: **非搭載**

### resetBehavior v0.7
- settingChange: コナミ公式開発者回答では通常の設定変更でRT状態はクリアされず保持。成立済みボーナスも保持。有利区間は設定変更で初期化され非有利区間へ。液晶は賀慕神社開始という本機専用解析あり。
- powerOFF→ON: RT状態、有利区間ランプ、内部状態を引き継ぐ。液晶は賀慕神社が基本だが有利区間滞在中は引き継ぐという本機専用比較資料あり。
- gameCounter / ceiling: `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`。
- mode/state: 有利区間に紐づく内部状態とRT状態を分離。設定変更時の通常A/B・高確A/B具体的振り分けは`UNVERIFIED_AFTER_RESEARCH`。
- advantageousSection: 設定変更時リセット/非有利区間、純電断ではランプ/内部状態引継ぎ。有利区間上限1500G。
- morning benefit: 設定変更専用短縮天井・公開初当たり優遇率はなし/未確認。固定的な出玉恩恵としては`NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 朝一有利区間ランプ点灯は純電断/据え置き系の材料。本機固有ガックン条件/率は再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- RAMクリア時の特殊初期RTは通常設定変更とは別操作なので混入させない。

## 2018-05-21群監査
### 処理済み
- No.1192 秘宝伝 Rev. — canonical 2018-05-21（日付CONFLICT保持）
- No.1193 マジカルハロウィン6 — canonical 2018-05-21

### 再分類
- `ディスクアップ`: **2018-06-04候補**へ繰り下げ。
  - グリーンべると2018-04-25記事: サミー内覧会、納品6/3開始予定。
  - 複数DB/解析: 導入6/4。
  - すろぱちくえすと2018一覧のみ5/21表記が確認されるため、登録時は`CONFLICT_RELEASE_DATE_2018_05_21_VS_2018_06_04`として監査する。

### 未処理先頭
- `シークレットハイビスカス25π` / `シークレットハイビスカス`
  - HAZUSE、ちょんぼりすた、すろぱちくえすと、2-9伝説: 2018-05-21。
  - DMMぱちタウン: 2018-05-28。
  - グリーンべると2018-04-11記事: 納品6月3日予定。
  - 性能値はHAZUSE/P-WORLD/パチマガスロマガ等で概ね一致。次回、導入日定義/地域差/予定変更を追加監査してからNo.1194候補として登録する。日付差は平均しない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_shinzo-ningen-casshern.md**（新造人間キャシャーン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_hanasakari.md`（花盛）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は時系列本線の5/21群日付監査を優先し、QAカーソルは進めていない。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- `ディスクアップ`を2018-05-21で先行登録しない。一次業界資料+複数DBが示す2018-06-04を本命として後続群でCONFLICT監査する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- RT状態と有利区間/内部状態は別レイヤー。本機のように設定変更時の処理が異なる場合は混同しない。
- 導入日・出玉率の競合は平均化せず`CONFLICT`として保持する。
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1193を再取得。
2. **1193件 / chronologicalFrontier 2018-05-21 / 5/21群OPEN**を正本として継続。
3. `シークレットハイビスカス25π` の日付競合（5/21・5/28・6/3納品予定）を公式/業界/当時DBで再監査し、最古の実導入日をcanonical化。未登録ならNo.1194としてperformance core + resetBehavior v0.7を登録。
4. 5/21群全メーカー/別スペック監査後、漏れがなければ群CLOSE。`ディスクアップ`は6/4群まで保留。
5. 遡及QAは `2006-07_hanasakari.md`（花盛）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1193 マジカルハロウィン6
- HAZUSE: https://hazuse.com/machine/pachislot/7S1520/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000530/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_magihallo6/1/
- 一撃 ART概要: https://1geki.jp/slot/s_magihallo6/81/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_magihallo6/3/
- ちょんぼりすた: https://chonborista.com/slot/kpe-slot/56238/
- 期待値見える化: https://slotjin.com/slot/magihallo6/
- KONAMI公式 まじおつ。2018-06-01: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_19/20180601.html
- KONAMI公式 本気おつ。2024-01-26: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_25/20240126.html

### 5/21群境界監査
- グリーンべると — ディスクアップ: https://web-greenbelt.jp/00010411/
- すろぱちくえすと2018一覧: https://www.slopachi-quest.com/article/sindai-2018/
- 2-9伝説導入一覧: https://29den.com/newslot/
- HAZUSE — シークレットハイビスカス: https://hazuse.com/machine/pachislot/7S1036/
- グリーンべると — シークレットハイビスカス: https://web-greenbelt.jp/00010382/
- DMMぱちタウン — シークレットハイビスカス: https://p-town.dmm.com/machines/3134/recommend
