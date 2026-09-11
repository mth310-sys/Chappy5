更新日: 2026-09-12

## 現在地点
- recordCount: **1391**
- latestRecordAdded: **パチスロ フレームアームズ・ガール — No.1391**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-02-08_frame-arms-girl.md`
- chronologicalFrontier: **2021-02-08**
- frontierLatestMachine: **パチスロ フレームアームズ・ガール — No.1391**
- schema: **resetBehavior v0.7**
- status: **2021-02-08_GROUP_OPEN_2_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1390「パチスロ バイオハザード7 レジデント イービル」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- handoff指定の次機種 **No.1391「パチスロ フレームアームズ・ガール」**を追加。
- 遡及resetBehavior QAは `2007-05-13_urusei-yatsura.md`（うる星やつら）を正式処理し、性能側 `coreStatus: PARTIAL` は維持したまま reset側を `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- No.1391追加後および遡及QA後にmain HEADを確認し、並行更新による競合がないことを確認。

## No.1391 — パチスロ フレームアームズ・ガール
- path: `docs/real_machine_db/machines/2021-02-08_frame-arms-girl.md`
- manufacturer: **ネット**
- formalModel: **SフレームアームズガールNC**
- certificationNumber: **0S1140**
- releaseDate: **2021-02-08**
- generation/system: **6.1号機 / AT / 周期抽選 / CZ + 擬似ボーナス経由バトルAT**
- payoutRateBySetting: **98.0 / 98.9 / 101.4 / 105.9 / 110.0 / 114.9%**
- SC初当たり: **1/258 / 266 / 242 / 248 / 231 / 221**
- FAガールバトル初当たり: **1/741 / 634 / 629 / 471 / 495 / 373**
- baseGamesPer50: **約50.1〜51.0G**。K-Naviの全設定約50.1G表記とはスコープ差として保持。
- netIncrease: **約2.6枚/G**
- basicPayout: **SC 20G / FAガールバトル1戦30G保障。固定枚数型ではないため固定獲得枚数は置かない。**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_ADVANTAGEOUS_MODE_TABLE**

### resetBehavior v0.7 — No.1391
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET→新規有利区間**。液晶は温泉待機画面から開始。
- 据え置き: **天井・内部状態・有利区間進行CARRY_OVER**として扱う。
- 純電源OFF→ON: **天井CARRY_OVER / 内部状態CARRY_OVER**。電源ON後の液晶開始ステージは高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常最深: **7周期 / 約650〜651G目安でSC以上**。設定変更専用の固定短縮天井は確認できない。
- 有利区間移行時に有利1〜6を再抽選。通常成立役時の設定別公開モード振り分けをレコードへ保存。設定6は有利6 **42.1%**。
- 上記モード表は設定変更専用ではなく**有利区間移行時共通値**として定義分離。
- 有利区間ランプはPAY OUT右下ドット。通常時点灯型のため **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。前日非有利区間終了・店側対策等の例外があるため確定条件にはしない。
- 本機固有ガックン条件/発生率は資料系統を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-02-08群 — OPEN
固定キュー候補:
1. **パチスロ バイオハザード7 レジデント イービル — No.1390 / DONE**
2. **パチスロ フレームアームズ・ガール — No.1391 / DONE**
3. **パチスロ ゴッドイーター ジ・アニメーション — NEXT / No.1392候補**
4. **政宗３**
5. **KING黄門ちゃま**

- status: **2021-02-08_GROUP_OPEN_2_OF_5_KNOWN_PROCESSED**。
- 5機処理後、1geki・K-Navi・当時新台一覧・メーカー/検定資料を再横断し、別型式・PB・地域差・延期機を監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新mainを再同期後、同じ2021-02-08群の **No.1392候補「パチスロ ゴッドイーター ジ・アニメーション」** から継続。
- 性能コア + resetBehavior v0.7を同時収集し、設定変更/据え置き/純電断の有利区間・天井・モード/状態差を優先確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 性能側 `coreStatus: PARTIAL` は維持。
- 通常ゲーム数天井は非搭載 / 有利区間は制度導入前でNOT_APPLICABLE。
- 10GプチRT「ガールハントタイム」の残りG・内部RT状態、成立済みボーナス/告知状態について、設定変更/据え置き/純電断の本機固有契約を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン・初期出目・ランプ等の変更判別も固定できず推測補完しない。
- 次回遡及QAカーソルは、Git追加履歴上の次レコード **`docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）**。

## GitHub保存
- No.1391追加 commit: `a52051695c83b91cb80933591d967015ce7dda97`
- うる星やつら reset QA commit: `4a83bb72b81c125fe3f203fecfd6e1d59dd401e3`
- うる星やつら field alignment fix commit: `fad17ac8f0fc791116e673536c526c5cbdcc51e6`

## 主要出典 — 取得日 2026-09-12
### No.1391 フレームアームズ・ガール
- https://www.dreamnews.jp/press/0000226315
- https://hazuse.com/machine/pachislot/0S1140/genre/209/
- https://p-kn.com/slot/3516/
- https://www.pachibee.jp/machines/kouryaku/220120004
- https://1geki.jp/slot/s_fagirl/3/
- https://chonborista.com/slot/net-slot/125339/
- https://nana-press.com/kaiseki/machine/102/3268/

### 遡及QA — うる星やつら
- https://news.p-world.co.jp/articles/2133/greenbelt
- https://web-greenbelt.jp/00004122/
- https://www.p-world.co.jp/machine/database/4675
- https://minslo.com/%E3%81%86%E3%82%8B%E6%98%9F%E3%82%84%E3%81%A4%E3%82%89/
- https://oniatsu.com/sunday-2-4887
- https://www.sammy.co.jp/japanese/products/pachislot/2007/index.html
- https://web-greenbelt.jp/00003110/
