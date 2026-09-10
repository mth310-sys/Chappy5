更新日: 2026-09-10

## 現在地点
- recordCount: **1195**
- latestRecordAdded: **ゆるせぽね**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-05-28_yurusepone.md`
- chronologicalFrontier: **2018-05-28**
- frontierLatestMachine: **ゆるせぽね — No.1195**
- schema: **resetBehavior v0.7**
- status: **2018-05-28_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1194を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時正本は **1194件 / chronologicalFrontier 2018-05-21 / 5/21群CLOSED**。
- 未処理先頭 `ゆるせぽね` をNo.1195としてperformance core + resetBehavior v0.7収集。
- HAZUSE / K-Navi / ちょんぼりすた / 一撃 / 2-9伝説は2018-05-28で一致。ユニバーサル公式は2018年5月。アタリ7のみ2018-06-04のため、平均せず日付CONFLICTを保持し、2018-05-28をcanonicalとした。
- 5/28群は2-9伝説等のカレンダーと複数資料で監査し、現時点で独立した未処理同日機を確認できないためCLOSED。
- 次は2018-06-04群。既知候補として `パチスロディスクアップ` / `パチスロ 天元突破グレンラガン極` / `パチスロ 貞子vs伽椰子` を確認。前回handoff指示どおりディスクアップを先頭候補とし、同日全メーカー/別スペック監査を行ってからNo.1196候補として処理する。
- 遡及QAカーソルは変更せず `2006-07_hanasakari.md`（花盛）。

## No.1195 — ゆるせぽね
- path: `docs/real_machine_db/machines/2018-05-28_yurusepone.md`
- manufacturer: **ミズホ**
- releaseDateCanonical: **2018-05-28**
- formalModelName: `ゆるせぽねDY`
- certificationNumber: `7S1516`
- generation/system: **5.9号機 / ボーナス+RT / 貫通型NSRT**
- settings: **1 / 2 / 5 / 6**
- 機械割: **97.8 / 99.8 / 105.1 / 113.0%**
- GOD: **全設定1/1638.4**
- BIG: **1/212.1 / 1/202.3 / 1/175.2 / 1/144.0**
- MB: **1/213.5 / 1/203.5 / 1/176.2 / 1/144.7**
- 合算: **1/99.9 / 1/95.5 / 1/83.4 / 1/69.1**
- 50枚ベース: **30.4 / 30.9 / 31.6 / 32.9G**（公開FAQ概算約31G）
- GOD / BIG / MB: **最大203 / 155 / 47枚**
- GOD後RT: **700G、純増は現状維持程度、ボーナス成立でも残りRT継続、GOD再成立で700G再セット**
- 天井/救済: **非搭載**

### resetBehavior v0.7
- settingChange: 公開FAQは「すべてクリア」。ただし一撃の当時資料ではRT状態は「現在調査中」のため、700G RT残Gの設定変更処理は`RT_SPECIFIC_UNVERIFIED_AFTER_RESEARCH`。
- carryOver: 据え置きを純電断と独立条件で示すRT残G/状態契約は`UNVERIFIED_AFTER_RESEARCH`。
- powerOFF→ON: 公開FAQで、ボーナス成立〜告知前なら復帰後WINランプ点灯。BB後30G以内カウントはクリア。RT状態は一撃で「現在調査中」のため`UNVERIFIED_AFTER_RESEARCH`。
- gameCounter / ceiling: 通常天井は`NOT_APPLICABLE`。BB後30G以内カウントは純電断で`CLEARED`。
- mode/state: 設定変更時はFAQでall clear。朝一専用モード/公開振り分けは`NONE_CONFIRMED_AFTER_RESEARCH`。RT-specificは未固定。
- advantageousSection: `NOT_APPLICABLE_5_9_A_PLUS_RT_NO_ADVANTAGEOUS_SECTION_DEPENDENT_AT_GAMEPLAY`。
- morning benefit: ちょんぼりすたは「恩恵などは無し」。短縮天井/朝一専用初当たり優遇なし。
- resetDetection: ガックン/初期出目の本機固有確定条件・率は`UNVERIFIED_AFTER_RESEARCH`。純電断前の未告知ボーナスは復帰後WINランプ点灯だが、一般的な設定変更判別とは扱わない。

## conflicts
### ゆるせぽね導入日
- `CONFLICT_RELEASE_DATE_2018_05_28_VS_2018_06_04`
  - HAZUSE / K-Navi / ちょんぼりすた / 一撃 / 2-9伝説: 2018-05-28。
  - ユニバーサル公式: 2018年5月。
  - アタリ7: 2018-06-04。
  - canonicalは複数当時/導入後資料一致の2018-05-28。

### リセット一般記述とRT固有未確定
- `RESET_GENERAL_ALL_CLEAR_VS_RT_SPECIFIC_RESEARCH_PENDING`
  - 公開FAQ: 設定変更時「すべてクリア」。
  - 一撃: 設定変更時/電源OFF→ON時のRT状態「現在調査中」。
  - broad記述からRT残G処理を推定せず、RT-specificはUNVERIFIEDで保持。

## 2018-05-28群監査
### 処理済み
- No.1195 ゆるせぽね — canonical 2018-05-28（日付CONFLICT保持）

### 群判定
- `2018-05-28_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 2-9伝説の2018-05-28欄ではゆるせぽねのみ。HAZUSE/K-Navi/ちょんぼりすた/一撃でも5/28を確認。

## 次候補 — 2018-06-04群
- **パチスロディスクアップ** — サミー
  - K-Navi / 一撃 / ちょんぼりすた等: 2018-06-04。
  - 前回監査で2018-05-21表記資料が1系統あったため、登録時は`CONFLICT_RELEASE_DATE_2018_05_21_VS_2018_06_04`を再監査する。
- **パチスロ 天元突破グレンラガン極** — スパイキー
  - HAZUSE: 2018-06-04、型式`パチスロ天元突破グレンラガン極／SA`、検定`7S1387`。
- **パチスロ 貞子vs伽椰子** — 藤商事
  - HAZUSE: 2018-06-04、型式`貞子VS伽椰子FSC`、検定`7S0824`。
- 次回は同日全メーカー/別スペックを追加監査し、最古未処理をNo.1196から順に処理する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_shinzo-ningen-casshern.md**（新造人間キャシャーン）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_hanasakari.md`（花盛）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は時系列本線の5/28群処理を優先し、QAカーソルは進めていない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- `ディスクアップ`を2018-05-21へ戻さない。2018-06-04支持が複数あるため、登録時に5/21資料とのCONFLICTを明示監査する。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率の競合は平均化せず`CONFLICT`として保持する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1195を再取得。
2. **1195件 / chronologicalFrontier 2018-05-28 / 5/28群CLOSED**を正本として継続。
3. **2018-06-04群を全メーカー/別スペックで監査**。
4. 前回指示を維持し、**パチスロディスクアップを先頭No.1196候補**としてperformance core + resetBehavior v0.7を収集。5/21 vs 6/4導入日CONFLICTを再確認する。
5. 続いて同日候補 `パチスロ 天元突破グレンラガン極` / `パチスロ 貞子vs伽椰子` を漏れなく処理する。
6. 遡及QAは `2006-07_hanasakari.md`（花盛）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1195 ゆるせぽね
- ユニバーサル公式: https://www.universal-777.com/product/slot/yurusephone/
- HAZUSE: https://hazuse.com/machine/pachislot/7S1516/
- P-WORLD: https://www.p-world.co.jp/machine/database/8655
- K-Navi: https://p-kn.com/slot/3004/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/57961/
- 一撃: https://1geki.jp/slot/s_yurusephone/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_yurusephone/3/
- 公開FAQ PDF: https://rashinban-web.com/system/files/member/column/suzumenosu/yurusepone.pdf
- 2-9伝説: https://29den.com/newslot/
- アタリ7: https://www.atari7.com/slot/date1227864469.php

### 次候補 2018-06-04群
- ディスクアップ K-Navi: https://p-kn.com/slot/3005/
- ディスクアップ 一撃: https://1geki.jp/slot/s_discup/
- ディスクアップ ちょんぼりすた: https://chonborista.com/slot/sammy-slot/57863/
- 天元突破グレンラガン極 HAZUSE: https://hazuse.com/machine/pachislot/7S1387/
- 貞子vs伽椰子 HAZUSE: https://hazuse.com/machine/pachislot/7S0824/
